const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const generateToken = function(userId){
    
    const token = jwt.sign({userId:userId}, secret, {expiresIn:'8h'})
    return token
}

module.exports = generateToken