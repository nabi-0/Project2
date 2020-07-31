var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // The email cannot be null, and must be a proper email before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Post;
};