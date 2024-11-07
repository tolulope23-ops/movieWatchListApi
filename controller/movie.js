const movieDb = require('../model/movie');
const {StatusCodes} = require('http-status-codes');

const addMovie = async(req, res) => {
    try {
        const movie = new movieDb(req.body);
        await movie.save();
        res.status(StatusCodes.CREATED).json({
            success: true,
            statusCode:StatusCodes.CREATED,
            message:"Movie(s) has been added",
            data:movie
        });
        console.log(movie);
    } catch (error) {
        console.log(error.message);
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        })
    }
}

const getMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await movieDb.findById(id);
        if(!movie){
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                statusCode: StatusCodes.BAD_REQUEST,
                message: error.message,
                data:{}
            })
        }
        res.status(StatusCodes.OK).json({
            success:true,
            statusCode:StatusCodes.OK,
            message:"",
            data: movie
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{}
        })
    }
}

const getMovies = async (req, res) => {
    try {
        const movies = await movieDb.find();
        if(movies.length == 0){
            res.status(StatusCodes.OK).json({
                success:true,
                statusCode:StatusCodes.OK,
                message:"Movies has not been added",
                data: {}
            })
        } 
        res.status(StatusCodes.OK).json({
            success:true,
            statusCode:StatusCodes.OK,
            message:"",
            data: movies
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{}
        })
    }
}

const updateMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await movieDb.findByIdAndUpdate(id, req.body, {new: true});
        if(!movie){
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                statusCode: StatusCodes.BAD_REQUEST,
                message:`Id not found or ${error.message}`,
                data:{}
            })
        }
        res.status(StatusCodes.OK).json({
            success: true,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Movies Updated Successfully",
            data:movie
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{}
        })
    }
}

const delMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await movieDb.findByIdAndDelete(id);
        if(!movie){
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            message:`Id not found or ${error.message}`,
            data:{}
        })
    }
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Movies deleted Successfully",
        data:movie
    })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{}
        })
    }
}

module.exports = {addMovie,getMovie, getMovies,updateMovie, delMovie};