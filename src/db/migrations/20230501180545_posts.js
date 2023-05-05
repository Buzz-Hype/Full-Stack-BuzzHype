/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id');
        table.integer('user_id').references('id').inTable('users');
        table.string('post_text');
        table.timestamps(true,true);
        // table.string('user_name').references('username').inTable('users');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
