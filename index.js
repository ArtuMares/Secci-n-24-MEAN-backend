const express = require("express");
const cors = require("cors");
const path = require("path");   
const { dbConnection } = require("./db/config.js");
const res = require("express/lib/response");
require("dotenv").config();


console.log(process.env)

//Crear servidor / aplicación de express
const app= express();
//Base de datos
dbConnection()
//Directorio público
app.use(express.static("public"));
//CORS
app.use(cors() );
//Lectura y parse de información del body
app.use(express.json());
//Rutas
app.use('/api/auth', require("./routes/auth.js"));
// Manejar demás rutas
app.get( "*", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${4000}`)
});