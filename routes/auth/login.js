const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const userModel = require('../../models/userModel')
const jwtGen = require('../../utils/jwtGen')
const URI = require('../../utils/URI')

router.post('/',async(req,res)=>{
    try{
        await mongoose.connect(URI)

        const {email,password} = req.body

        const user = await userModel.findOne({'email':email})

        if(user){
            const isValidPassword = await bcrypt.compare(password,user.password)
            console.log(isValidPassword)
            if(isValidPassword){
                const jwt = jwtGen(user.email)
                return res.status(200).json(jwt)
            }else{
                return res.status(401).send("email or password is incorrect")
            }
            
        }else{
            return res.status(400).send("email or password is incorrect")
        }


        
        
    }catch(err){
        console.log(err)
        return res.status(500).send("server error");
    }

})

module.exports = router