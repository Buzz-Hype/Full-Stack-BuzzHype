const deletePost = async (req, res) => {
    const {
      session,
      db: { Posts },
      params: { id },
      // body: {posts_id}
    } = req;
  
    const post = await Posts.delete(id);
    // session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = deletePost;