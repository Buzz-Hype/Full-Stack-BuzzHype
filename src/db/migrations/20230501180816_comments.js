/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('comments', (table) => {
        table.increments('id');
        table.integer('posts_id').references('id').inTable('posts');
        table.integer('user_id').references('id').inTable('users');
        table.string('comment_body');
        table.timestamps(true,true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
