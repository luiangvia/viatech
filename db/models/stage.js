    module.exports = function (sequelize, Sequelize) {
        var Stage = sequelize.define("Stage", {
          id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING,
            notEmpty: true,
          }
         
        

        },  { timestamps: false });
      
        return Stage;
      };
      