export function up(knex) {
  return knex.schema.createTable('jokes', (table) => {
    table.increments('id')
    table.string('joke')
    table.string('punchLine')
  })
}

export function down(knex) {
  return knex.schema.dropTable('jokes')
}
