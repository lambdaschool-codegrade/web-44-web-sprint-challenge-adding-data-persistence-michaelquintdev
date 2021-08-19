// build your `/api/projects` router here
const { json } = require('express');
const express = require('express')
const Project = require('./model')
const {validatePost} = require('./middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.getAll()
        res.status(200).json(projects)
    }catch(error){
        next(error)
    }
})

router.post('/', validatePost, async (req, res, next) => {
    try{
        const obj = await Project.add(req.body)
        res.status(201).json(obj)
    }catch(error){
        next(error)
    }
})

module.exports = router;