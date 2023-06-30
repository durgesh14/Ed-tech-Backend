const express = require("express");
const router = express.Router();

const SectionController = require("../api/homepage/section.controller");

router.get("/", SectionController.getLesson);
router.post("/post", SectionController.addlesson);

module.exports = router;
