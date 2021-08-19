// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('project')
}

const getById = (id) => {
    return db('project').select('project_id', 'project_name', 'project_description', 'project_completed').where('project_id', id).first()
}

function getByName(name) {
    return db('project')
        .where({ project_name: name })
        .first()
}

const add = async (project) => {
    const [id] = await db('project').insert(project)
    return getById(id)
}

module.exports = {
    getAll,
    add,
    getByName
}