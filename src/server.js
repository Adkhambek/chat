//Express
const express = require('express')
const app = express()

//Server
const { PORT, host } = require('./config')

app.get('/', (req, res) => {
    res.send('<h1>Test</h1>')
})

app.listen(PORT, ()=>{console.log("server is running on http://" + host + ":" + PORT)})