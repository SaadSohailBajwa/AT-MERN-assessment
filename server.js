const express = require('express')
const app = express()
const PORT = 3000
const mongoose =  require('mongoose')
const taskModel = require('./model')
require('dotenv').config()
const dbPassword = process.env.dbPassword

const cors = require('cors')

app.use(express.json())
app.use(cors())







/////////////routes////////////
//auth routes
app.use('/auth',require("./routes/auth/index"))

//crud routes
app.use('/crud',require("./routes/crud/index"))








// app.get('/',async(req,res)=>{

//     try{
//         await mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.5o9vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
//         const getAllTasks = await taskModel.find({})
//         console.log(getAllTasks)
//         res.send("hello world")
//     }catch(err){
//         console.log(err)
//     }
    
// })


app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`)
})