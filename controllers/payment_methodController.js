const { validatePayment_method } = require("../validation/payment_methodVal");
const { Op } = require("sequelize");
const { Payment_method } = require("../models");

exports.createPayment_method = async (req, res) => {
  const { error } = validatePayment_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const payment_method = await Payment_method.create(req.body);
    res.status(201).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPayment_method = async (req, res) => {
  try {
    const payment_methods = await Payment_method.findAll();
    res.status(200).send(payment_methods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPayment_methodById = async (req, res) => {
  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method)
      return res.status(404).send("Payment_method not found");
    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatePayment_method = async (req, res) => {
  const { error } = validatePayment_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method)
      return res.status(404).send("Payment_method not found");
    await payment_method.update(req.body);
    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletePayment_method = async (req, res) => {
  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method)
      return res.status(404).send("Payment_method not found");

    const payment_methodData = payment_method.toJSON();

    await payment_method.destroy();
    res.status(204).send(payment_methodData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchPayment_method = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const payment_methods = await Payment_method.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(payment_methods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
