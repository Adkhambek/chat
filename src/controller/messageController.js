const messageModel = require('../model/messages')

const GET_MESSAGES = (req, res) => {
    const {id} = req.params
    const messages = messageModel.getMessages(id)
    if(messages){
        res.json(messages)
    }else {
        res.status(404).json({message: "The message not found"})
    }
} 

const GET_MESSAGE = (req, res) => {
    const {id} = req.params
    const message = messageModel.getMessage(id)
    if(message){
        res.json(message)
    }else {
        res.status(404).json({message: "The message not found"})
    }
} 

const POST = (req, res) => {
    const message = messageModel.insertMessage(req.body)
    if(message){
        res.status(201).json({message: "The message was sent", body: message})
    } else {
        res.status(400).json({message: "The something wrong"})
    }
} 

module.exports = {GET_MESSAGES, GET_MESSAGE, POST}