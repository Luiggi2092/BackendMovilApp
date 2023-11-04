const express = require("express")
const morgan = require("morgan")
require("dotenv").config();
const mainRouter = require('../Routes/index')


const server = express();
 server.name= "API"

 server.use(morgan('dev'))
 
server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');         //Aqui se ingresa la url del front para que unicamente acepte request de alli
    next();
})

server.use('/', mainRouter)


module.exports = server