'use strict'

const mongoose = require('mongoose')
const os = require('os')
const _SECONDS = 5000

//check count connect
const countConnect = () => {
    return mongoose.connections.length
}

//check over load 
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCore = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCore * 5

        console.log(`Active connections: ${maxConnection}`)
        console.log(`Memory usage: ${memoryUsage / 1024 /1024} MB`)

        if(numConnection > maxConnection) console.log(`Connection overload detected`)
    }, _SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}