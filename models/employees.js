var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
      // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password 
    //entered by the user can be compared to the hashed password stored in our database
    Employee.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Employee.addHook("beforeCreate", function(employee) {
        employee.password = bcrypt.hashSync(employee.password, bcrypt.genSaltSync(10), null);
    });
    return Todo;
  };