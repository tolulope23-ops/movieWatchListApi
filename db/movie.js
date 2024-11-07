//Creating a database connection using mongoose
const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URI = process.env.DATABASEURI;

const connectDB = async() => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Connected to Database");
        console.log(DATABASE_URI);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;