const knex = require('../knex');

class Posts {

    constructor({ id, user_id, post_text, username }) {
        this.id = id;
        this.user_id = user_id;
        this.post_text = post_text;
        this.username = username;
      }

    static async create(user_id,post_text){
        try{
            const post = await knex.raw('INSERT INTO posts (user_id, post_text) VALUES(?,?) RETURNING *',[user_id,post_text])
            return new Posts(post.rows[0])
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
    static async find(id){
        try{
            const findpost = await knex.raw('SELECT * FROM posts WHERE id =?', [id]);
            if(!findpost){
                return null;
            }
            return new Posts(findpost.rows[0]);
        }catch(error){
            console.log(error)
            return null
        }
    }
    static async delete(id){
        try{
            const foundPost = await Posts.find(id)
            if(!foundPost) return null;
            await knex.raw('DELETE FROM comments WHERE posts_id = ?', [id])
            const deletedpost =  await knex.raw('DELETE FROM posts WHERE id= ? RETURNING *', [id])
            return deletedpost.rows[0]
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async list(){
        try{


            const {rows} = await knex.raw('SELECT posts.*, username FROM posts JOIN users On posts.user_id = users.id ORDER BY posts.id DESC')

            return rows.map((post) => new Posts(post));

        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async update(id, posts_text){
        try{
            let updatatepost = await knex.raw('UPDATE posts SET post_text = ? WHERE posts.id = ?', [posts_text, id])
        }catch(error){
            console.log(error);
            return null 
        }
    }
}
module.exports = Posts;