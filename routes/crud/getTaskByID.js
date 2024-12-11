const mongoose = require("mongoose");
const URI = require("../../utils/URI");
const taskModel = require("../../models/taskModel");

const fetchTaskByID = async(req,res)=>{
    try{
        const id = req.params.id

        await mongoose.connect(URI);

        const getTaskByID = await taskModel.findById(id)
        console.log(getTaskByID)
        if(getTaskByID){
            return res.status(200).send(getTaskByID)
        }else{
            return res.status(404).send("task not found")
        }
        
    }catch(err){
        console.log(err)
        return res.status(500).send("server error")
    }
}

module.exports = fetchTaskByID