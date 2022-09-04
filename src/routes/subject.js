const express = require('express')
const subject_routes = express.Router()

/* Crear una materia */
subject_routes.post('/subject', (req,res)=>{})

/* Listar todas las materias existentes */
subject_routes.get('/subjects', (req,res)=>{})

/* Consultar una materia en especifico */
subject_routes.get('/subjects:idSubject', (req,res)=>{})

/* Actualizar una materia en especifico */
subject_routes.put('/subjects:idSubject', (req,res)=>{})

/* Eliminar una materia en especifico */
subject_routes.delete('/subjects:idSubject', (req,res)=>{})

module.exports = subject_routes