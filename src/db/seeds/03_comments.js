/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {posts_id: '1', user_id:'2',comment_body:'What does this even mean?'},
    {posts_id: '2', user_id:'1',comment_body:'My name is Oshaun'}
  ]);
};
