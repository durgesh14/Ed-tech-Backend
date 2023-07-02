const Section = require("../../models/section.model");
module.exports.addlesson = async (req, res) => {
  try {
    const sectionData = req.body;
    const section = new Section(sectionData);
    await section.save();
    res.status(201).send(section);
  } catch (error) {
    res.status(400).send(error);
  }
};

const ITEMS_PER_PAGE = 1;

module.exports.getLesson = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const skip = (page - 1) * ITEMS_PER_PAGE;

    const sections = await Section.find().skip(skip).limit(ITEMS_PER_PAGE);

    res.send(sections);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};
