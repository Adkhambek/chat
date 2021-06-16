const path = require('path')
const userModel = require('../model/users')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), '/src', '/views', '/login.html'))
} 

const POST = (req, res) => {
    const user = userModel.loginUser(req.body)
    if(user){
        res.status(201).json({message: "The user has been loged in", body: user})
    } else {
        res.status(400).json({message: "The username or password is wrong"})
    }
}

module.exports = {GET, POST}