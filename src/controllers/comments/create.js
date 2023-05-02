const createdcomment = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { user_id, comment_body },
    } = req;
  
    const post = await Comment.create(user_id, comment_body);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = createdcomment;