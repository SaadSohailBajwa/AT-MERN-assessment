const jwt = require("jsonwebtoken")
require('dotenv').config()

function jwtGen(email){
    const payload = {
        user: email
    }


    return jwt.sign(payload,process.env.jwtSecret,{
        expiresIn:600
    
    })
}
module.exports = jwtGen