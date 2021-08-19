// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const {validatePost} = require('./middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const tasks = await Task.getTasks()
        res.status(200).json(tasks)
    }catch(error){
        next(error)
    }
})

router.post('/', validatePost, async (req, res, next) => {
    try{
        const obj = await Task.add(req.body)
        res.status(201).json(obj)
    }catch(error){
        next(error)
    }
})

module.exports = router;