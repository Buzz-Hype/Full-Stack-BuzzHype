const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null;

  constructor({ id, username, password }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM users';
      const { rows } = await knex.raw(query);
      return rows.map((user) => new User(user));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM users WHERE id = ?';
      const { rows: [user] } = await knex.raw(query, [id]);
      return user ? new User(user) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM users WHERE username = ?';
      const result  = await knex.raw(query, [username]);
      const { rows: [user] } = result;
      return user ? new User(user) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(username, password) {
    try {
      const passwordHash = await hashPassword(password);

      const query = `INSERT INTO users (username, password)
        VALUES (?, ?) RETURNING *`;
      const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
      return new User(user);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex.raw('TRUNCATE users');
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    try {
      const [updatedUser] = await knex('users')
        .where({ id: this.id })
        .update({ username })
        .returning('*');
      return updatedUser ? new User(updatedUser) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  update_password = async (password) => {
    try{
      const passwordHash = await hashPassword(password);
      const updatedpassword = await knex.raw('UPDATE users password=? WHERE id=? RETURNING *', [passwordHash,this.id])
      return updatedpassword ? new User(updatedpassword) : null;
    }
    catch(error){
      console.error(err);
      return null
    }
  }

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
