const createdcomment = async (req, res) => {
    const {
      session,
      db: { Comment },
<<<<<<< HEAD
      body: { user_id,post_id, comment_body },
    } = req;
  
    const post = await Comment.create(comment_body,user_id, post_id);
    session.userId = user.id;
=======
      body: { posts_id, comment_body,user_id },
    } = req;
    const post = await Comment.create(posts_id, comment_body,user_id);

>>>>>>> main
  
    res.send(post);
  };
  
  module.exports = createdcomment;