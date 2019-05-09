const router = require("express").Router();
const projectRoutes = require("./project");
const reagentRoutes = require("./reagent");
const runRoutes = require("./run");
const stageRoutes = require("./stage");
const userRoutes = require("./user");


// project routes
router.use("/project", projectRoutes);
// reagent routes
/*
router.use("/reagent", reagentRoutes);
// run routes
router.use("/run", runRoutes);
// stage routes
router.use("/project", stageRoutes);
// user routes
router.use("/user", userRoutes);
*/

module.exports = router;
