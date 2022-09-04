const express = require('express')
const course_routes = express.Router()

/* Crear una asignatura */
course_routes.post('/course', (req,res)=>{})

/* Listar todas las asignaturas existentes */
course_routes.get('/courses', (req,res)=>{})

/* Consultar una asignatura en especifico */
course_routes.get('/courses:idCourse', (req,res)=>{})

/* Actualizar una asignatura en especifico */
course_routes.put('/courses:idCourse', (req,res)=>{})

/* Eliminar una asignatura en especifico */
course_routes.delete('/courses:idCourse', (req,res)=>{})

module.exports = course_routes