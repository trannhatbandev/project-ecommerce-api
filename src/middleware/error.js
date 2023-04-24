const ErrorHandler = require("../utils/ErrorHandler")

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'

    //wrong mongodb id error
    if(err.name === "CastError"){
        const message = `Resource not found with this id.. Invalid ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    //duplicate key error
    if(err.name === 11000){
        const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message, 400)
    }

    //wrong jwt error
    if(err.name === 'JsonWebTokenError'){
        const message = `Your url is invalid please try again letter`
        err = new ErrorHandler(message, 400)
    }

    //jwt expried
    if(err.name === 'TokenExpriedError'){
        const message = `Your url is expried please try again letter`
        err = new ErrorHandler(message, 400)
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}