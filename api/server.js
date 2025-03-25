require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./scr/router.js')

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000, ()=>{
    console.log('Respondendo em http://localhost:' +process.env.PORT)
})