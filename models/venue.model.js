const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schema: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });


  Venue.associate = (models) => {
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "event",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seat",
    });
    Venue.hasMany(models.Venue_venuetype, {
      foreignKey: "venue_id",
      as: "venue_venuetype",
    });
    Venue.hasMany(models.Venue_photo, {
      foreignKey: "venue_id",
      as: "venue_photo",
    });
  };

  return Venue;
};
