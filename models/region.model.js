const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


  Region.associate = (models) => {
    Region.hasMany(models.Customer_address, {
      foreignKey: "region_id",
      as: "customer_address",
    });
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "venue",
    });
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "district",
    });
  };

  return Region;
};


