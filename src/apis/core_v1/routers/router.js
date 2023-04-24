const shopRouter = require('./shop.router')
const userRouter = require('./user.router')

const { Router } = require('express');

// Export the base-router
const baseRouter = Router();

baseRouter.use('/shop', shopRouter);
baseRouter.use('/user', userRouter);

module.exports = baseRouter