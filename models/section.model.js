const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const QuizSchema = new mongoose.Schema({
  questions: { type: [QuestionSchema], required: true },
});

const SectionSchema = new mongoose.Schema({
  sectionId: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  videoId: { type: String },
  images: { type: [String], required: true },
  quiz: { type: QuizSchema, required: true },
});

module.exports = mongoose.model("Section", SectionSchema);
