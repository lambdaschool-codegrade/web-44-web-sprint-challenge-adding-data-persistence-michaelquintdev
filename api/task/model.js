// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('task')
        .leftJoin('project', 'task.project_id', 'project.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
}

async function add(task){
    const [task_id] = await db('task').insert(task)
    return db('task as t')
        .leftJoin('project as p','p.project_id','t.project_id')
        .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description')
        .where({task_id})
        .first()
}

module.exports = {
    getTasks,
    add
}