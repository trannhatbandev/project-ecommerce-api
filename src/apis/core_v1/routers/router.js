const shopRouter = require('./shop.router')

const { Router } = require('express');

// Export the base-router
const baseRouter = Router();

baseRouter.use('/shop', shopRouter);

module.exports = baseRouter