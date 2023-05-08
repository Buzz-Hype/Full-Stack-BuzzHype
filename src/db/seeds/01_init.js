const listUsers = require("../../controllers/user/list");
const User = require("../models/user");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await User.create('OshaunB','8008')
  await User.create('LuisR','8008')
};
