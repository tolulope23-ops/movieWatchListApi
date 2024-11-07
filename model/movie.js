//Creating a model for our database to use CRUD Operation.
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true
        },

        genre:
        {
            type: String,
            required: true
        },

        released: 
        {
            type: Date,
            required: true
        },

        watched: 
        {
            type: Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model("movie", movieSchema);

