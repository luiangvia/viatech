    module.exports = function (sequelize, Sequelize) {
        var Stage = sequelize.define("Stage", {
          stage_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
          },
          stage_name: {
            type: Sequelize.STRING,
            notEmpty: true,
          }
         
        

        },  { timestamps: false });
      
        return Stage;
      };
      