// Example code for how models should be structured

//module.exports =  (sequelize,Sequelize, DataTypes)=> {
module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    password: {
      type: Sequelize.STRING,
      notEmpy: true,
      validate: {
        len: {
          args: [6, 100],
          msg: "/models/user.js, Passwords must be between 6 and 100 characters long!"
        }
      }
    }
    /*,
    lastname: {
      type: Sequelize.STRING,
      notEmpy: true,
    },
    email: {
      type: Sequelize.STRING,
      notEmpy: true,
      unique: true,
      validate: {
        isEmail: {
          msg: "/models/user.js, Oh noes sequelize doesn't think that's an email!!!!"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      notEmpy: true,
      validate: {
        len: {
          args: [6, 100],
          msg: "/models/user.js, Passwords must be between 6 and 100 characters long!"
        }
      }
    },
    points :{
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    lastLogin: {
      type: Sequelize.DATE
    },
    resetPasswordToken: {
      type: Sequelize.STRING
    },
    resetPasswordExpires: {
      type: Sequelize.DATE
    }
*/

  }
  ,  { timestamps: false }
        
  );

  User.associate = function(models) {
    // Associating User with Project
    // When an User is deleted, restrict delete of any associated Projects
    User.hasMany(models.Project, {
      //onDelete: "restrict"
    });
  };


  return User;
};
