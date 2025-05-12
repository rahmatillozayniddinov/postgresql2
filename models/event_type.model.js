const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Event_type = sequelize.define("Event_type", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  Event_type.associate = (models) => {
    Event_type.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "event",
    });
  };
  return Event_type;
};
