const listcomments = async (req, res) => {
    const {
      session,
      db: { Comment },
      params: { id },
    } = req; 
  
    const post = await Comment.list( id);
    // session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = listcomments;