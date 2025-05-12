const { Delivery_method } = require("../models");
const {
  validateDelivery_method,
} = require("../validation/delivery_methodVal");
const { Op } = require("sequelize");

exports.createDelivery_method = async (req, res) => {
  const { error } = validateDelivery_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const delivery_method = await Delivery_method.create(req.body);
    res.status(201).send(delivery_method);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDelivery_methods = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findAll();
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDelivery_methodById = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method)
      return res.status(404).send("delivery_method not found");
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDelivery_method = async (req, res) => {
  const { error } = validateDelivery_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method)
      return res.status(404).send("Delivery_method not found");
    await delivery_method.update(req.body);
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDelivery_method = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method)
      return res.status(404).send("delivery_method not found");

    const delivery_methodData = delivery_method.toJSON();

    await delivery_method.destroy();
    res.status(204).send(delivery_methodData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDelivery_methods = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const delivery_methods = await Delivery_method.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(delivery_methods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
