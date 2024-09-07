const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    role:{
        type:String,
        enum:["admin","user","partner"],
        required:true,
        default:"user"
    }


});


const userModel = mongoose.model("user",userSchema);

module.exports = userModel;