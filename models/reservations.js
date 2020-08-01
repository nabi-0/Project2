module.exports = function (sequelize, DataTypes) {
  var Reservations = sequelize.define("Reservations", {
    // The email cannot be null, and must be a proper email before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    // conference: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Reservations;
};
