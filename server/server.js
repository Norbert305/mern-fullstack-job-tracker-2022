const express = require('express');//back-end web-framework
const colors =require('colors')
const dotenv = require('dotenv').config()//allows to use dotenv
const connectDB = require('./config/connectDB.js')
const port = process.env.PORT || 5000 
const app = express() 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");


app.use(cors());
connectDB()//conncts our atlis cluster

app.use(express.json());
//allows us to connect our middleware to our routs.js file
const myRoutes = require('./routes/routes')
//middle-ware-routs
app.use('/api/user', myRoutes)

//port listener
app.listen(port,()=>{
    console.log(`Our server port ${port} is running!!!!`)
})