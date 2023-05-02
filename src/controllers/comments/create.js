const createdcomment = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { posts_id, comment_body,user_id },
    } = req;
    const post = await Comment.create(posts_id, comment_body,user_id);

  
    res.send(post);
  };
  
  module.exports = createdcomment;