const express = require("express");

const router = express.Router();

const {addTrainer} = require('../controller/trainerController');

router.route("/add").post(addTrainer);

module.exports = router;