const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    team : {
        type : String,
        required : true
    }
})

const studentModel = mongoose.model("Students DB",studentSchema)
module.exports = studentModel;