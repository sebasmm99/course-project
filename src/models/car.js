const mongoose = require('mongoose')
const personSchema = mongoose.Schema({
    placa:{
        type: String,
        require: true,
        unique: true
    },
    marca:{
        type: String,
        require: true
    },
    modelo:{
        type: String,
        require: true
    },
    color:{
        type: String,
        require: true    
    },
    concesionarias:{
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('CarCollection', personSchema)
