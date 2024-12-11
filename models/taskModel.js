const mongoose = require("mongoose");
require("dotenv").config();

// const password = process.env.dbPassword;
const URI = require("../utils/URI")

mongoose.connect(URI);

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const taskModel = model("task", taskSchema)

module.exports = taskModel;
