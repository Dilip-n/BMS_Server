const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    gener:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    poster:{
        type:String,
        required:true
    }
})

const Movies = mongoose.model("movies",moviesSchema);

module.exports = Movies;