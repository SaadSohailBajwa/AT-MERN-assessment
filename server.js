const express = require('express');
const app = express();
const PORT = 3000;
const mongoose =  require('mongoose');
const taskModel = require('./model');

app.get('/',async(req,res)=>{

    try{
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.5o9vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const getAllTasks = await taskModel.find({})
        console.log(getAllTasks)
        res.send("hello world")
    }catch(err){
        console.log(err)
    }
    
})


app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`)
})