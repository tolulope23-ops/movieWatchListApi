const express = require('express');
const connectDB = require('./db/movie');
const movieRoutes = require('./routes/movie');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use("/api/v3/movie", movieRoutes);

const PORT = process.env.PORT;

const server = async() => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`app is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

server();