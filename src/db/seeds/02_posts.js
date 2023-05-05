/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
  await knex('posts').insert([
    {user_id: 1 ,post_text:'tomato potato tamato'},
    {user_id: 2,post_text:'My name is Luis'}
  ]);
};
