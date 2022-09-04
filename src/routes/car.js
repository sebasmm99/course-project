const express = require('express')
const car_routes = express.Router()

/* Crear un carro */
car_routes.post('/car', (req,res)=>{})

/* Listar todos los carros existentes */
car_routes.get('/cars', (req,res)=>{})

/* Consultar un carro en especifico */
car_routes.get('/cars:idCar', (req,res)=>{})

/* Actualizar un carro en especifico */
car_routes.put('/cars:idCar', (req,res)=>{})

/* Eliminar un carro en especifico */
car_routes.delete('/cars:idCar', (req,res)=>{})

module.exports = car_routes