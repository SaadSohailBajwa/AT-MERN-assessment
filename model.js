const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.5o9vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  description: String,
  completed: {
    type:Boolean,
    default:false
  },
  createdAt: {
    type: Date,
    default: ()=> Date.now()
  },
});

const taskModel = model("task", taskSchema);

module.exports = taskModel;
