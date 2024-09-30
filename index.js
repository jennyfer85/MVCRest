import express from 'express'  //Utiliza Emascrip
//const express = require('express'); //Versión antigua

//crear la app
const app = express(); //instacia de express

//Routing - Endpoint que soporta nuestra aplicación
app.get('/', function(req, res) {
    res.json({msg:'Hola mundo en express'}) //devuelve los datos tipo json
})

app.get('/nosotros', function(req, res) {
    res.send('Información de nosotros') //muestra la información
})


//Definir un puerto y arrancar el proyecto
const port = 3000
app.listen(port, () =>{
    console.log('El servidor esta funcionando en el puerto ${port}')
});