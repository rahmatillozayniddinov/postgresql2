const { validateVenue } = require("../validation/venueVal");
const { Op } = require("sequelize");
const { Venue, Region, District } = require("../models");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.create(req.body);
    res.status(201).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue = async (req, res) => {
  try {
    const venue = await Venue.findAll();
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
        {
          model: District,
          as: "district",
        },
      ],
    });
    if (!venue) return res.status(404).send("venue not found");
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");
    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");

    const venueData = venue.toJSON();

    await venue.destroy();
    res.status(204).send(venueData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenue = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const venue = await Venue.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
