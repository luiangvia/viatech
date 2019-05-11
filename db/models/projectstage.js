module.exports = function (sequelize, Sequelize) {
    var ProjectStage = sequelize.define("ProjectStage", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
        //Project.belongsToMany(Run, {through: { model: ProjectStage, unique: false }, foreignKey: 'project_id' });
        //Run.belongsToMany(Project, {through:{ model: ProjectStage, unique: false }, foreignKey: 'run_id' });
        return ProjectStage;
} 