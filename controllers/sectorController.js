const { validateSector } = require("../validation/sectorVal");
const { Op } = require("sequelize");
const { Sector } = require("../models");

exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sector = await Sector.create(req.body);
    res.status(201).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSector = async (req, res) => {
  try {
    const sectors = await Sector.findAll();
    res.status(200).send(sectors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSectorById = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");
    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");
    await sector.update(req.body);
    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");

    const sectorData = sector.toJSON();

    await sector.destroy();
    res.status(204).send(sectorData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSector = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const sectors = await Sector.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(sectors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
