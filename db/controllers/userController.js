const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        //db.User.findOne({where:{id:1}}).then(user=>{res.json(user.projects[0])})
        db.User.findOne({where:{id:1}}).then(user=>{res.json(user.projects)})
        //use push to add useridfk to project created
        /*example
            // search for attributes
Project.findOne({ where: {title: 'aProject'} }).then(project => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
})
        */

        /*
        db.User.findAll().then(user => {
            res.json(user);
            
            // Users will be an array of all User instances
            
          })
          */
      }
}

/*
reusable find by id
findAll: function(req, res) {
        db.User.findOne({where:{user_id:1}}).then(user=>{res.json(user)})
*/