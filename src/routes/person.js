const express = require('express')
const person_routes = express.Router()

/* Crear una persona */
person_routes.post('/person', (req,res)=>{})

/* Listar todas las personas existentes */
person_routes.get('/people', (req,res)=>{})

/* Consultar una persona en especifico */
person_routes.get('/people:idPerson', (req,res)=>{})

/* Actualizar una persona en especifico */
person_routes.put('/people:idPerson', (req,res)=>{})

/* Eliminar una persona en especifico */
person_routes.delete('/people:idPerson', (req,res)=>{})

module.exports = person_routes