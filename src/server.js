//Express
const express = require('express')
const app = express()

//Server
const { PORT, host } = require('./config')

//Controller
const homeController = require('./controller/homeController')

app.get('/', homeController.GET)

app.listen(PORT, ()=>{console.log("server is running on http://" + host + ":" + PORT)})