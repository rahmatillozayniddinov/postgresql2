const { validateVenue_type } = require("../validation/venue_typeVal");
const { Op } = require("sequelize");
const { Venue_type } = require("../models");

exports.createVenue_type = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_type = await Venue_type.create(req.body);
    res.status(201).send(venue_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_type = async (req, res) => {
  try {
    const venue_type = await Venue_type.findAll();
    res.status(200).send(venue_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_typeById = async (req, res) => {
  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(404).send("venue_type not found");
    res.status(200).send(venue_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue_type = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(404).send("venue_type not found");
    await venue_type.update(req.body);
    res.status(200).send(venue_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue_type = async (req, res) => {
  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(404).send("venue_type not found");

    const venue_typeData = venue_type.toJSON();

    await venue_type.destroy();
    res.status(204).send(venue_typeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenue_type = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const venue_type = await Venue_type.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(venue_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
