'use strict';
const app = require('./app');
const configs = require('./src/configs/configs');

process.on('uncaughtException', (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
});

const server = app.listen(configs.port, () => {
    console.log(`Server running on port ${configs.port}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit server`));
});

process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promise rejection`);

    server.close(() => process.exit(1));
});
