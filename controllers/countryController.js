const { Country } = require("../models");
const { validateCountry } = require("../validation/countryVal");
const { Op } = require("sequelize");

exports.createCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.create(req.body);
    res.status(201).send(country);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getcountrys = async (req, res) => {
  try {
    const countrys = await Country.findAll();
    res.status(200).send(countrys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("country not found");
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatecountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("country not found");
    await country.update(req.body);
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("country not found");

    const countryData = country.toJSON();

    await country.destroy();
    res.status(204).send(countryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchcountrys = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const countrys = await Country.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(countrys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
