const { validateStatus } = require("../validation/statusVal");
const { Op } = require("sequelize");
const { Status } = require("../models");

exports.createStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const status = await Status.create(req.body);
    res.status(201).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findAll();
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("status not found");
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("status not found");
    await status.update(req.body);
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("status not found");

    const statusData = status.toJSON();

    await status.destroy();
    res.status(204).send(statusData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchStatus = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const status = await Status.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
