const { Booking, Payment_method, Delivery_method, Cart, Status, Discount } = require("../models");
const { validateBooking } = require("../validation/bookingVal");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Cart,
          as: "cart",
        },
        {
          model: Payment_method,
          as: "payment_method",
        },
        {
          model: Delivery_method,
          as: "delivery_method",
        },
        {
          model: Status,
          as: "status",
        },
        {
          model: Discount,
          as: "discount",
        },
      ],
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");
    await booking.update(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("booking not found");

    const bookingData = booking.toJSON();

    await booking.destroy();
    res.status(204).send(bookingData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchBookings = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const bookings = await Booking.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
