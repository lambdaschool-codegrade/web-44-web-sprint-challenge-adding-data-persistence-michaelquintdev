// build your server here and require it from index.js
const express = require('express')
const server = express()
const resourceRouter = require('./resource/router')

server.use(express.json())

server.use('/api/resources', resourceRouter)

server.use('*', (req, res, next) => {
    next({status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server