const mongoose = require('mongoose')
const course_schema = mongoose.Schema({
    course_name:{
        type: String,
        require: true,
        unique: true
    },
    credits:{
        type: Number,
        require: true
    }
})
module.exports = mongoose.model('CourseCollection', course_schema)