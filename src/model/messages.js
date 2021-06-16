const fs = require("fs")
const path = require("path")

const insertMessage = (data) => {
    const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const messages = require("../database/messages.json")
    const id = messages.length ? messages[messages.length - 1].id + 1 : 1
        const newMessage = {id, ...data, time}
        messages.push(newMessage)
        fs.writeFileSync(path.join(__dirname, "..", "/database", "/messages.json"), JSON.stringify(messages, null, 4))
        return newMessage
} 

const getMessages = () => {
   const messages =  require(path.join(process.cwd(), '/src', '/database', '/messages.json'))
   return messages
} 

const getMessage = (id) => {
    const messages =  require(path.join(process.cwd(), '/src', '/database', '/messages.json'))
    const findMessage = messages.find(check => check.userId == id)
    if(findMessage){
        return findMessage
    }else return
 }



module.exports = {insertMessage, getMessages, getMessage}