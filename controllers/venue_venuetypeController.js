const { validateVenue_venuetype } = require("../validation/venue_venuetypeVal");
const { Op } = require("sequelize");
const { Venue_venuetype, Venue, Venue_type } = require("../models");

exports.createVenue_venuetype = async (req, res) => {
  const { error } = validateVenue_venuetype(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_venuetype = await Venue_venuetype.create(req.body);
    res.status(201).send(venue_venuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_venuetype = async (req, res) => {
  try {
    const venue_venuetype = await Venue_venuetype.findAll();
    res.status(200).send(venue_venuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue_venuetypeById = async (req, res) => {
  try {
    const venue_venuetype = await Venue_venuetype.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
        {
          model: Venue_type,
          as: "venue_type",
        },
      ],
    });
    if (!venue_venuetype)
      return res.status(404).send("venue_venuetype not found");
    res.status(200).send(venue_venuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue_venuetype = async (req, res) => {
  const { error } = validateVenue_venuetype(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue_venuetype = await Venue_venuetype.findByPk(req.params.id);
    if (!venue_venuetype)
      return res.status(404).send("venue_venuetype not found");
    await venue_venuetype.update(req.body);
    res.status(200).send(venue_venuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue_venuetype = async (req, res) => {
  try {
    const venue_venuetype = await Venue_venuetype.findByPk(req.params.id);
    if (!venue_venuetype)
      return res.status(404).send("venue_venuetype not found");

    const venue_venuetypeData = venue_venuetype.toJSON();

    await venue_venuetype.destroy();
    res.status(204).send(venue_venuetypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenue_venuetype = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const venue_venuetype = await Venue_venuetype.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(venue_venuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
