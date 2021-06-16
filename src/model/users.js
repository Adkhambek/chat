const fs = require("fs")
const path = require("path")

const insertUser = (user) => {
    const users = require("../database/users.json")
    const foundUser = users.find(check => check.username == user.username)
    const id = users.length ? users[users.length - 1].id + 1 : 1
    if(!foundUser){
        const newUser = {id, ...user}
        users.push(newUser)
        fs.writeFileSync(path.join(__dirname, "..", "/database", "/users.json"), JSON.stringify(users, null, 4))
        delete newUser.password
        return newUser
    } else return
    
}

const loginUser = (user) => {
    const users = require("../database/users.json")
    const foundUser = users.find(check => check.username == user.username && check.password == user.password)
    
    if(foundUser){
        delete foundUser.password
        return foundUser
    } else return
    
}

module.exports = {insertUser, loginUser}