const db = require("../models");
//db.models.User.findById(1).then((u)=>{u.getProjects()}).then((p)=>{project=p})   - for projects
//db.models.User.findById(1).then((u)=>{u.getProjects()}).then((p)=>{p.getStages()}).then((s)=>{stages=s})   - for stages
//chaining to gets projects by user

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


//another debugging example to test associations
/*
const dbex = require("../models");
let project
dbex.Project.findById(1).then(p=>project=p)
project
(returns model)

let stages
project.getStages().then(s=>{stages=s})
stages
*/

/*adding stages
 project.getStages().then(s=>{stages=s})  
  stages
  project.addStages(stages)
  project.getStages().then(s=>{stages=s})
  stages
  goto bottom (ProjectStage)
  */


// to add all stages to projects 
//let projects
//dbex.Project.addStages(stages).then(map of projects or for each to loop through projects)

  /*

  

  */