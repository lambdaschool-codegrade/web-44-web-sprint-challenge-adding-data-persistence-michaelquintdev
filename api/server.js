// build your server here and require it from index.js
const express = require('express')
const server = express()
server.use(express.json())

// routers getting required


server.use('*', (req, res, next) => {
    next({status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server