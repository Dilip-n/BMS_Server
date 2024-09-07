const mongoose = require("mongoose");
require('dotenv').config();

const db_url = (process.env.db_url !== undefined)?process.env.db_url:'mongodb+srv://dilipadmin:5lSlObvlcE8KFHvv@cluster0.8q1zg.mongodb.net/mongodev';

(async ()=>{
    try {
        await mongoose.connect(db_url)
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
   
})()