    module.exports = function (sequelize, Sequelize) {
        var Project = sequelize.define("Project", {
          id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
          },
          projectname: {
            type: Sequelize.STRING,
            notEmpty: true,
          }
         
        

        },  { timestamps: false });
      
        return Project;
      };
      