const knex = require('../knex');

class Comment{

    constructor({ id, user_id, comment_body }) {
        this.id = id;
        this.user_id = user_id;
        this.post_text = comment_body;
      }

    static async create(post_id, comment_body,user_id){
        try{

            const createdcomment = await knex.raw(`
                INSERT INTO comments (posts_id,user_id,comment_body) 
                VALUES (?,?,?) 
                RETURNING *
            `, [post_id,user_id,comment_body])
            return new Comment(createdcomment.rows[0])
          }
          catch(error){
              console.log(error)
              return null
          }

    }
    static async delete(id){
        try{
            const deletedpost =  await knex.raw('DELETE FROM comments WHERE id= ? RETURNING *', [id])
            return deletedpost.rows[0]
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async list(posts_id){
        try{

            const {rows} = await knex.raw('SELECT * FROM comments WHERE posts_id=?',[posts_id])
            return rows.map((comment) => new Comment(comment));

        }
        catch(error){
            console.log(error)
            return null
        }
    }
}

module.exports = Comment