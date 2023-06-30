const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const port = process.env.PORT || 8000;
const path = require("path");

app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./config/mongoose");

app.use("/api/auth", authRoutes);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
