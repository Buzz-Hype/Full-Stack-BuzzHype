const knex = require('../knex');

class Comment{

    constructor({ id, user_id, comment_body }) {
        this.id = id;
        this.user_id = user_id;
        this.post_text = comment_body;
      }

    static async create(comment_body,user_id){
        try{
          const createdcomment = knex.raw('INSERT INTO comments (comment_body,user_id) VALUES (comment_body,user_id) RETURNING *', [comment_body,user_id])
          return new Comment(createdcomment)  
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async delete(id){
        try{
        const deletedcomment = knex.raw('DELETE FROM comments WHERE id=? RETURNING *',[id])
        return deletedcomment.rows[0]
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    static async list(post_id){
        try{
            const listcomments = knex.raw('SELECT * FROM comments WHERE post_id=?',[post_id])
            return listcomments.map((comment) => new Comment(comment));
        }
        catch(error){
            console.log(error)
            return null
        }
    }
}

module.exports = Comment