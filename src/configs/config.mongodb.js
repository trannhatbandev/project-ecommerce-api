'use strict'

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'shopEcommerce'
    }
}

const pro = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'db'
    }
}

const config = { dev, pro }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]