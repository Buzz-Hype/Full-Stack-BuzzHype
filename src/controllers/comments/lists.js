const listcomments = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { posts_id },
    } = req; 
  
    const post = await Comment.list( posts_id);
    // session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = listcomments;