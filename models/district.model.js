const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });


  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    District.hasMany(models.Customer_address, {
      foreignKey: "district_id",
      as: "customer_address",
    });
    District.hasMany(models.Venue, {
      foreignKey: "district_id",
      as: "venue",
    });
  };

  return District;
};
