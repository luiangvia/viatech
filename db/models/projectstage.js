module.exports = function (sequelize, Sequelize) {
    var ProjectStage = sequelize.define("ProjectStage", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    ProjectStage.associate = function(models) {
        // Associating User with Project
        // When an User is deleted, restrict delete of any associated Projects
        ProjectStage.hasMany(models.Project, {
          //onDelete: "restrict"
        });
        //belongsTo only needs to be added if this held data that pertinent to both projects and models (ex. users and messages in message app, joining table that also holds data) / don't need it here because it's only passing ids to associate
        ProjectStage.hasMany(models.Stage, {
            //onDelete: "restrict"
          });
      };
        //Project.belongsToMany(Run, {through: { model: ProjectStage, unique: false }, foreignKey: 'id' });
        //Run.belongsToMany(Project, {through:{ model: ProjectStage, unique: false }, foreignKey: 'id' });
        return ProjectStage;
} 