export async function seed(knex) {
  await knex('jokes').insert([
    { id: 1, joke: 'This is a joke...', punchLine: '...or is it?' },
  ])
}
