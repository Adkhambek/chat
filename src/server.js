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

//Middleware

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

//Controller

app.get('/registor', registorController.GET)
app.post('/registor', registorController.POST)
app.get('/login', loginController.GET)
app.post('/login', loginController.POST)
app.get('/', homeController.GET)

app.listen(PORT, () => {console.log("server is running on http://" + host + ":" + PORT)})