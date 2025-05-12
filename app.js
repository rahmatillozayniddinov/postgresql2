const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const adminRoute = require("./routes/adminRoute");
const bookingRoute = require("./routes/bookingRoute");
const cart_itemRoute = require("./routes/cart_itemRoute");
const cartRoute = require("./routes/cartRoute");
const countryRoute = require("./routes/countryRoute");
const customer_addressRoute = require("./routes/customer_addressRoute");
const customer_cardRoute = require("./routes/customer_cardRoute");
const customerRoute = require("./routes/customerRoute");
const delivery_methodRoute = require("./routes/delivery_methodRoute");
const districtRoute = require("./routes/districtRoute");
const discountRoute = require("./routes/discountRoute");
const event_typeRoute = require("./routes/event_typeRoute");
const eventRoute = require("./routes/eventRoute");
const flatRoute = require("./routes/flatRoute");
const genderRoute = require("./routes/genderRoute");
const human_categoryRoute = require("./routes/human_categoryRoute");
const langRoute = require("./routes/langRoute");
const languageRoute = require("./routes/languageRoute");
const payment_methodRoute = require("./routes/payment_methodRoute");
const regionRoute = require("./routes/regionRoute");
const seat_typeRoute = require("./routes/seat_typeRoute");
const seatRoute = require("./routes/seatRoute");
const sectorRoute = require("./routes/sectorRoute");
const statusRoute = require("./routes/statusRoute");
const ticketRoute = require("./routes/ticketRoute");
const ticket_statusRoute = require("./routes/ticket_statusRoute");
const venue_photoRoute = require("./routes/venue_photoRoute");
const venueRoute = require("./routes/venueRoute");
const venue_typeRoute = require("./routes/venue_typeRoute");
const venue_venuetypeRoute = require("./routes/venue_venuetypeRoute");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", adminRoute);
app.use("/api", bookingRoute);
app.use("/api", cart_itemRoute);
app.use("/api", cartRoute);
app.use("/api", countryRoute);
app.use("/api", customer_addressRoute);
app.use("/api", customer_cardRoute);
app.use("/api", customerRoute);
app.use("/api", delivery_methodRoute);
app.use("/api", districtRoute);
app.use("/api", discountRoute);
app.use("/api", event_typeRoute);
app.use("/api", eventRoute);
app.use("/api", flatRoute);
app.use("/api", genderRoute);
app.use("/api", human_categoryRoute);
app.use("/api", langRoute);
app.use("/api", languageRoute);
app.use("/api", payment_methodRoute);
app.use("/api", regionRoute);
app.use("/api", seat_typeRoute);
app.use("/api", seatRoute);
app.use("/api", sectorRoute);
app.use("/api", statusRoute);
app.use("/api", ticketRoute);
app.use("/api", ticket_statusRoute);
app.use("/api", venue_photoRoute);
app.use("/api", venueRoute);
app.use("/api", venue_typeRoute);
app.use("/api", venue_venuetypeRoute);

setupSwagger(app);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
});
