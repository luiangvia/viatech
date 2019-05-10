module.exports = function (sequelize, Sequelize) {
    var ProjectRun = sequelize.define("ProjectRun", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
        //Project.belongsToMany(Run, {through: { model: ProjectRun, unique: false }, foreignKey: 'project_id' });
        //Run.belongsToMany(Project, {through:{ model: ProjectRun, unique: false }, foreignKey: 'run_id' });
        return ProjectRun;
} 