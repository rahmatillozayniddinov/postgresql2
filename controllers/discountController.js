const { validateDiscount } = require("../validation/discountVal");
const { Op } = require("sequelize");
const { Discount } = require("../models");

exports.createDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await Discount.create(req.body);
    res.status(201).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscount = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).send(discounts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id, {});
    if (!discount) return res.status(404).send("discount not found");
    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("discount not found");
    await discount.update(req.body);
    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("discount not found");

    const discountData = discount.toJSON();

    await discount.destroy();
    res.status(204).send(discountData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDiscount = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const discounts = await Discount.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { login: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(discounts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
