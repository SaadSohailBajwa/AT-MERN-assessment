const express = require('express')
const app = express()
const PORT = 3000

require('dotenv').config()


const cors = require('cors')

app.use(express.json())
app.use(cors())







/////////////routes////////////
//auth routes
app.use('/auth',require("./routes/auth/index"))

//crud routes
app.use('/crud',require("./routes/crud/index"))







app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`)
})