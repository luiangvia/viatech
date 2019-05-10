module.exports = function (sequelize, Sequelize) {
    var Image = sequelize.define("Image", {
      image_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      image_location: {
        type: Sequelize.STRING,
        notEmpty: true,
      }
     
    

    },  { timestamps: false });
  
    return Image;
  };
  