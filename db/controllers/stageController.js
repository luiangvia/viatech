const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Stage.findAll(/*put options to filter here*/).then(stage => {
            res.json(stage);
            // stage will be an array of all Stage instances
          })
      },


      findOne: function(req,res){
          db.Stage.findById(req.params.id).then(stage=>{res.json(stage)})
      }
}
//use the above as an example for chaining for other routes/controllers that get project/stage/run data etc.

//need function to get stage ids from project id
 