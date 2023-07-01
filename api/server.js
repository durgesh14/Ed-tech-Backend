const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("../routes/auth.routes");
const sectionRoutes = require("../routes/section.routes");
const path = require("path");

app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./config/mongoose");

app.use("/api/auth", authRoutes);
app.use("/api/lesson", sectionRoutes);

module.exports = app;
