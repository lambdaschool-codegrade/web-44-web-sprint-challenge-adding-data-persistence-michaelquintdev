const validatePost = (req, res, next) => {
    if (!req.body.task_description) {
        next({
            status: 400,
            message: `new tasks require a description`
        })
    } else {
        next()
    }
}

module.exports = {
    validatePost
}