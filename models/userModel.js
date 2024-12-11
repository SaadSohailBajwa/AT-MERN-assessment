const mongoose = require("mongoose");
require("dotenv").config();

// const password = process.env.dbPassword;
const URI = require("../utils/URI");

mongoose.connect(URI);

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model("user", userSchema);

module.exports = userModel;
