
const mongoose = require('mongoose')
const URI = require('../../utils/URI')
const taskModel = require('../../models/taskModel')

const fetchAll = async (req,res)=>{
    try{
        await mongoose.connect(URI);

        const fetchAll = await taskModel.find({})
        console.log(fetchAll)
        res.status(200).send(fetchAll)
    }catch(err){
        console.log(err)
        res.status(500).send("server error")
    }
}



module.exports = fetchAll