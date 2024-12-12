const mongoose = require("mongoose");
const URI = require("../../utils/URI");
const taskModel = require("../../models/taskModel");

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;

    await mongoose.connect(URI);

    const getTaskByID = await taskModel.findById(id);
    console.log(getTaskByID);
    if (getTaskByID) {
        const deleteTask = await taskModel.deleteOne({'_id':id})
        console.log(deleteTask)
        res.status(200).send("task deleted")
    } else {
      return res.status(404).send("task not found");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
};

module.exports = deleteTask;
