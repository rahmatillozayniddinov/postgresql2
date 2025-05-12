const { validateVenue_photo } = require("../validation/venue_photoVal");
const { Op } = require("sequelize");
const { Venue_photo, Venue } = require("../models");

exports.createVenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_photo = await Venue_photo.create(req.body);
    res.status(201).send(venue_photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_photo = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findAll();
    res.status(200).send(venue_photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_photoById = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
      ],
    });
    if (!venue_photo) return res.status(404).send("venue_photo not found");
    res.status(200).send(venue_photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(404).send("venue_photo not found");
    await venue_photo.update(req.body);
    res.status(200).send(venue_photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue_photo = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(404).send("venue_photo not found");

    const venue_photoData = venue_photo.toJSON();

    await venue_photo.destroy();
    res.status(204).send(venue_photoData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenue_photo = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const venue_photo = await Venue_photo.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(venue_photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
