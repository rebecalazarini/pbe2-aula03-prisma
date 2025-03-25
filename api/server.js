const express = require('express')
const cors = require('cors')
require('dotenv')
const app = express()

const router = require('./scr/router')

app.add(cors())
app.add(express.json())
app.add(router)

app.listen(5000, ()=>{
    console.log('Respondendo em http://localhost:5000' +process.env.PORT)
})