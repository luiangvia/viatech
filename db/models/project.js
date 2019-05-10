    module.exports = function (sequelize, Sequelize) {
        var Project = sequelize.define("Project", {
          project_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
          },
          project_name: {
            type: Sequelize.STRING,
            notEmpty: true,
          }
         
        

        },  { timestamps: false });

      
        return Project;
      };
      