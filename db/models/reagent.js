module.exports = function (sequelize, Sequelize) {
    var Reagent = sequelize.define("Reagent", {
      reagent_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      reagent_name: {
        type: Sequelize.STRING,
        notEmpty: true,
      }
     
    

    },  { timestamps: false });

    return Reagent;
  };
  