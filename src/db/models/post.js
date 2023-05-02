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
            return new Posts(post)
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
    static async delete(id){
        try{
            const deletedpost =  await knex.raw('DELETE FROM posts WHERE id= ?', [id])
            return deletedpost.rows[0]
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async list(){
        try{
            const {rows} = await knex.raw('select * FROM posts')
            return rows.map((post) => new Posts(post));
        }
        catch(error){
            console.log(error)
            return null
        }
    }
}
module.exports = Posts;