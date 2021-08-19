const Project = require('./model')

const validatePost = (req, res, next) => {
    const name = req.body.project_name 
    if(!name){
        next({
            status: 406,
            message: 'A new project needs a name'
        })
    }else{
        Project.getByName(name)
        .then(projects => {
            if(projects) {
                next({
                    status: 406,
                    message: `The project ${name} already exists`
                })
            }else{
                next()
            }
        })
        .catch(next) 
    }
}

module.exports = {
    validatePost
}