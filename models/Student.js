const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    enrolled: {
        type: Boolean,
        default: false,
        required: true
    }
})

const StudentModel = mongoose.model('Student', studentSchema)


module.exports = StudentModel;