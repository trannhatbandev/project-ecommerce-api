'use strict'
const userService = require('./services')
const ErrorHandler = require("../../../utils/ErrorHandler")
class UserController {
    userService
    constructor(){
        this.userService = new userService()
    }

    saveUser = async (req, res, next) => {
        if(!req.user) throw new ErrorHandler('Not permission', 400)
        const data = await this.userService.saveUser(req.body)
        return res.json({
            statusCode: '200a',
            data 
        })
    }
}

module.exports = UserController