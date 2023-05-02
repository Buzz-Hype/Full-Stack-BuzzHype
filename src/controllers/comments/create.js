const createdcomment = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { user_id,post_id, comment_body },
    } = req;
  
    const post = await Comment.create(comment_body,user_id, post_id);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = createdcomment;