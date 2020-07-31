module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // The email cannot be null, and must be a proper email before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
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
