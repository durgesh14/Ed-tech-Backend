const Auth = require("../../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.registerUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (username === undefined || password === undefined || username === null) {
      return res.status(400).send("Enter Username and Password");
    }
    const auth = await Auth.findOne({ username });

    if (auth) {
      return res.status(409).send("Username already exists!!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerdUser = new Auth({
      username,
      password: hashedPassword,
    });

    await registerdUser.save();

    res.status(200).json(registerdUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    console.log(`username & password: ${username} & ${password}`);
    if (
      username === undefined ||
      password === undefined ||
      username === null ||
      password === null
    ) {
      return res.status(400).send("Enter Username and Password");
    }
    const auth = await Auth.findOne({ username });

    if (!auth) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, auth.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: auth._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
