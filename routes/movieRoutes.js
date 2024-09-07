const movieRoues = require("express").Router();

const Movies = require("../models/movieModel")
const movieController = require("../controller/movieController")

movieRoues.post("/add-movie",addMovie())