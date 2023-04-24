'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { checkOverload } = require('./src/helpers/check.connect');
const apiCore = require('./src/apis/core_v1/routers/router');

app.enable('trust proxy');
app.use(
    cors({
        origin: '*',
    })
);
// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}
app.use(compression());

//init db
require('./src/databases/mongodb/config');
checkOverload();

app.use('/shop-ecommerce-v1', apiCore);

module.exports = app;
