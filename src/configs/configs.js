'use strict';

require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    connectString: process.env.URI_CONNECT_MONGODB,
};
