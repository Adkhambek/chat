const path = require('path')
const userModel = require('../model/users')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), '/src', '/views', '/registor.html'))
} 

const POST = (req, res) => {
    console.log(req.body);
    const user = userModel.insertUser(req.body)
    if(user){
        res.status(201).json({message: "The user has been registered", body: user})
    } else {
        res.status(400).json({message: "The user has already been existed"})
    }
}

module.exports = {GET, POST}