const { models } = require("mongoose");
const { Ticket_status } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });


  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.hasMany(models.Cart_item, {
      foreignKey: "cart_item_id",
      as: "cart_item",
    });
  };
  return Ticket;
};
