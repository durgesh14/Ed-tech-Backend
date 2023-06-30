const express = require("express");
const router = express.Router();

const SectionController = require("../api/homepage/section.controller");

router.post("/", SectionController.addlesson);

module.exports = router;
