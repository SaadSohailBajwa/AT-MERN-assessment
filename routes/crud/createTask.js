
const mongoose = require("mongoose");
const URI = require("../../utils/URI");
const taskModel = require("../../models/taskModel");

const createTask = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;

    await mongoose.connect(URI);

    const newTask = await taskModel.create({
      title: title,
      description: description,
    });

    console.log("new task created: ",newTask);
    return res.status(200).send("new task created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error")
  }
}

module.exports = createTask