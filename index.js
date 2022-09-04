const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://electiva1:electiva1@cluster0.hc3gafj.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Database connection succesful")).catch(() => console.log("Database connection error"));

const app = express()
const port = 3000

app.listen(port, ()=>{console.log('Connect with the port', port)})