const { models } = require("mongoose");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define("Discount", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Discount.associate = (models) => {
    Discount.hasMany(models.Booking, {
      foreignKey: "discount_coupon_id",
      as: "booking",
    });
  };

  return Discount;
};


