const express = require('express');//back-end web-framework
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose');


// app.get('/', (req,res)=>{
//     res.send("This is our get method")
// })
// app.get('/', (req,res)=>{
//     res.json({message: "This is our get method"})
// })



//middleware
app.use('api/user', require('./routes/routes'))

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log('connected to DB')
})

app.listen(port,()=>{
    console.log(`Our server port ${port} is running!!!!`)
})