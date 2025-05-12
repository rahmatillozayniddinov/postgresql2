const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Venue_venuetype = sequelize.define("Venue_venuetype", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venuetype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Venue_venuetype.associate = (models) => {
    Venue_venuetype.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Venue_venuetype.belongsTo(models.Venue_type, {
      foreignKey: "venuetype_id",
      as: "venue_type",
    });
  };
  
  return Venue_venuetype;
};
