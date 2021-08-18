
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 40).notNullable()
      tbl.string('project_description', 256)
      tbl.boolean('project_completed').defaultTo(0)
  })
  .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.string('resource_name', 32).notNullable().unique()
      tbl.string('resource_description', 256)
  })
  .createTable('task', tbl => {
      tbl.increments('task_id').primary()
      tbl.string('task_description', 256).notNullable()
      tbl.string('task_notes', 256)
      tbl.boolean('task_completed').defaultTo(0)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('project_resources', tbl => {
      tbl.increments('project_resource_id')
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate("CASCADE");
      tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
  .dropTableIfExists('resources')
  .dropTableIfExists('task')
  .dropTableIfExists('project_resources')
};
