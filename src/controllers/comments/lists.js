const listcomments = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { post_id },
    } = req;
  
    const post = await Comment.list( post_id);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = listcomments;