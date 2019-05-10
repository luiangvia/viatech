module.exports = function (sequelize, Sequelize) {
    var Run = sequelize.define("Run", {
      run_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      run_name: {
        type: Sequelize.STRING,
        notEmpty: true,
      }
     
    

    },  { timestamps: false });

    return Run;
  };
  