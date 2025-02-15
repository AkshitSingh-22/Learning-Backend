const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.URI;

const connectToDB = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch(error){
        console.log("Database connection failed");
    }
}

module.exports = connectToDB;