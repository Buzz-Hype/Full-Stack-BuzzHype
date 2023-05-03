const listUsers = require("../../controllers/user/list");
const User = require("../models/user");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('comments').del()
  // await knex('posts').del()
  // await knex('users').del()
  // await User.deleteAll()
  await User.create('OshaunB','8008')
  await User.create('LuisR','8008')
};
