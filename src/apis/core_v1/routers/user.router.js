const { Router } = require('express')
const { param } = require('express-validator');
const catchAsyncErrors = require('../../../middleware/catchAsyncErrors')
const UserController = require('../user/controllers');
const userController = new UserController();
const router = Router();

router.post('/sign-up', catchAsyncErrors(userController.saveUser))

module.exports = router