const jwt = require('jsonwebtoken')
require('dotenv').config()

const authorize = async (req,res,next) => {
    try{
        const jwtToken = await req.header("token")

        console.log(jwtToken)
        const jwtSecret = process.env.jwtSecret;
        console.log("jwtsecret is:",jwtSecret)

        if(!jwtToken){
            return res.status(403).send("not authorized")
        }

        const payload = jwt.verify(jwtToken,jwtSecret)

        req.user = payload.user
        next()
    }catch(err){
        console.log(err)
        return res.status(500).send("not authorized")
    }
}

module.exports = authorize