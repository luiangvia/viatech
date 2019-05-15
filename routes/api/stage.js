//this is handling the route of /api/stage
const router = require("express").Router();
const stageController = require("../../db/controllers/stageController");

router.route("/")
    .get(stageController.findAll);

    router.route("/:id")
    .get(stageController.findOne);


module.exports = router;