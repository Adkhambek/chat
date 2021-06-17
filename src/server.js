//Express
const express = require('express')
const path = require('path')
const app = express()

//Server
const { PORT, host } = require('./config')

//Controller
const homeController = require('./controller/homeController')
const loginController = require('./controller/loginController')
const registorController = require('./controller/registorController')
const messageController = require('./controller/messageController')
const userController = require('./controller/userController')

//Middleware

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

//Controller
app.get('/', homeController.GET)
app.get('/registor', registorController.GET)
app.post('/registor', registorController.POST)
app.get('/login', loginController.GET)
app.post('/login', loginController.POST)
app.get('/messages', messageController.GET_MESSAGES)
app.get('/message/:id', messageController.GET_MESSAGE)
app.post('/message', messageController.POST)
app.get('/users', userController.GET)

app.listen(PORT, () => {console.log("server is running on http://" + host + ":" + PORT)})