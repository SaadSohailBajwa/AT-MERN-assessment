const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const userModel = require("../../models/userModel");
const mongoose = require("mongoose");
const URI = require("../../utils/URI");

//NOTE: since registering users was not required in the assessment,
//therefor i am skipping validation checks for email and password
//however there cannot be more then one user with same email 
//but password can be of any length as long as its >= 1

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    

    
    await mongoose.connect(URI);

    const emailExists = await userModel.findOne({'email':email})
    if (emailExists){
        
        console.log("email already exists")
        return res.status(409).send("email already exists")
    }
    if(password.length < 8){
        
        console.log("user entered password that was less then 8 characters")

        return res.status(400).send("password must be at least 8 characters long")
    }


    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);


    const createUser = await userModel.create({
      email: email,
      password: hashedPassword,
    });

    console.log(`new user with email: ${createUser.email} registered`);

    return res.status(201).send("user registered successfully");
    // Side note: we are assuming user does not automatically logins
    // after registering, hence jwt token is not generated here.
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error")
  }
});

module.exports = router;
