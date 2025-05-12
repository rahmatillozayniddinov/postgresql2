const { Customer_address, Country, Customer, Region, District, Flat } = require("../models");
const {
  validateCustomer_address,
} = require("../validation/customer_addressVal");
const { Op } = require("sequelize");

exports.createCustomer_address = async (req, res) => {
  const { error } = validateCustomer_address(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer_address = await Customer_address.create(req.body);
    res.status(201).send(customer_address);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomer_address = async (req, res) => {
  try {
    const customer_addresss = await Customer_address.findAll();
    res.status(200).send(customer_addresss);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomer_addressById = async (req, res) => {
  try {
    const customer_address = await Customer_address.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Country,
          as: "country",
        },
        {
          model: Region,
          as: "region",
        },
        {
          model: District,
          as: "district",
        },
        {
          model: Flat,
          as: "flat",
        },
      ],
    });
    if (!customer_address)
      return res.status(404).send("customer_address not found");
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer_address = async (req, res) => {
  const { error } = validateCustomer_address(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer_address = await Customer_address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).send("customer_address not found");
    await customer_addresss.update(req.body);
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer_address = async (req, res) => {
  try {
    const customer_address = await Customer_address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).send("customer_address not found");

    const customer_addressData = customer_address.toJSON();

    await customer_address.destroy();
    res.status(204).send(customer_addressData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomer_address = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const customer_address = await Customer_address.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
