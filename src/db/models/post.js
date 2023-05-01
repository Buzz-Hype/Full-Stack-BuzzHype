const knex = require('../knex');

class Posts {

    constructor({ id, user_id, post_text }) {
        this.id = id;
        this.user_id = user_id;
        this.post_text = post_text;
      }

    static async create(user_id,post_text){
        try{
            const post = await knex.raw('INSERT INTO posts (user_id, post_text) VALUES(?,?) RETURNING *',[user_id,post_text])
            return post.rows[0]
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
    static async delete(id){

    }
    static async list(){

    }
}
module.exports = Posts;