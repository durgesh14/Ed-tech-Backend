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
