    module.exports = function (sequelize, Sequelize) {
        var Project = sequelize.define("Project", {
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
        Project.associate = function(models) {
          // Associating User with Project
          // When an User is deleted, restrict delete of any associated Projects
          Project.belongsTo(models.User, {
            //onDelete: "restrict"
          });
        };
      
        return Project;
      };
      