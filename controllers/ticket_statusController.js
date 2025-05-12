const { validateTicket_status } = require("../validation/ticket_statusVal");
const { Op } = require("sequelize");
const { Ticket_status } = require("../models");

exports.createTicket_status = async (req, res) => {
  const { error } = validateTicket_status(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket_status = await Ticket_status.create(req.body);
    res.status(201).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicket_status = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findAll();
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicket_statusById = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("ticket_status not found");
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket_status = async (req, res) => {
  const { error } = validateTicket_status(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("ticket_status not found");
    await ticket_status.update(req.body);
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket_status = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("ticket_status not found");

    const ticket_statusData = ticket_status.toJSON();

    await ticket_status.destroy();
    res.status(204).send(ticket_statusData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicket_status = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const ticket_status = await Ticket_status.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
