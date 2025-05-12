const { District, Region } = require("../models");
const { validateDistrict } = require("../validation/districtVal");
const { Op } = require("sequelize");

exports.createDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await District.create(req.body);
    res.status(201).send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    res.status(200).send(districts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
      ],
    });
    if (!district) return res.status(404).send("District not found");
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found");
    await district.update(req.body);
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("district not found");

    const districtData = district.toJSON();

    await district.destroy();
    res.status(204).send(districtData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDistricts = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const districts = await District.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(districts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
