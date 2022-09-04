const mongoose = require('mongoose')
const subjectSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    credits:{
        type: Number,
        require: true
    },
    code:{
        type: Number,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('SubjectCollection', subjectSchema)