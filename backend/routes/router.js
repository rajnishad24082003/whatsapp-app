const express = require("express");
const router  = express.Router();
const {getalltask,createtask}  = require("./messagetask");

router.route("/").get(getalltask).post(createtask);

module.exports = router;