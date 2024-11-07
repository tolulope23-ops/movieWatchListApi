const express = require('express');
const router = express.Router();

const {addMovie,getMovie, getMovies,updateMovie, delMovie} = require('../controller/movie');

router.post("/add", addMovie);
router.get("/:id", getMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", delMovie);

module.exports = router;