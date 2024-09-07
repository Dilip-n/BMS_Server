const express = require("express");
const app = express();
require("dotenv").config();//lodes the env to process.env
require('./config/db.js');

const cookieParser = require('cookie-parser');
//  const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js')
// app.use(cors());

//parsing user request body
app.use(express.json());
app.use(cookieParser());

app.use("/api/user",userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server Started and listening in port : ${PORT}`)
})
