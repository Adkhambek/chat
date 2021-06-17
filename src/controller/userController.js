const userModel = require('../model/users')

const GET = (req, res) => {
    const messages = userModel.getUsers()
    if(messages){
        res.json(messages)
    }else {
        res.status(404).json({message: "The message not found"})
    }
} 

module.exports = {GET}