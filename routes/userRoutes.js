const express = require("express");
const userModel = require("../models/userModel");
const userController = require("../controller/userController")
const userRoutes = express.Router();
const auth = require("../middlewares/authMiddlewares")

userRoutes.get("/test",(req,res)=>{
    try {
        res.status(200).json({success:true, message:'server is working'})
    } catch (error) {
        res.status(400).json({success:false, message:'server is not working'})
    }
})

userRoutes.post("/register", userController.createUser);
userRoutes.post("/login", userController.userLogin);
userRoutes.get("/currentUser",auth, userController.getCurrentUser);
userRoutes.post('/logout', auth, userController.logOutUser);
module.exports = userRoutes