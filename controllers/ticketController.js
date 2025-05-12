const { validateTicket } = require("../validation/ticketVal");
const { Op } = require("sequelize");
const { Ticket, Seat, Status, Event } = require("../models");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findAll();
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "event",
        },
        {
          model: Seat,
          as: "seat",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");
    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    const ticketData = ticket.toJSON();

    await ticket.destroy();
    res.status(204).send(ticketData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicket = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const ticket = await Ticket.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      include: [{ model: Customer, as: "customer" }],
    });
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
