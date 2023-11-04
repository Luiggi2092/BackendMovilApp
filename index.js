const { conn,sequelize} = require("./config/database")
require("dotenv").config();
const { PORT } = process.env;
const server = require("./config/App");
const express = require("express");


conn.sync({force:false}).then(async() => {
    try{
        await sequelize.authenticate();
        console.log("Conexion a la base de datos establecida correctamente");

        server.listen(PORT,()=> {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
        
    }catch(error){
        console.error("Error al conectar la base de datos : " , error);
    }
} );




server.use((req,res,next)=>{
    console.log("Estamos recibiendo una request");
    next();
})

server.get("/",(req,res)=>{
    console.log("aua")
    res.status(200).json({message: "Hola Mundo"});
})
