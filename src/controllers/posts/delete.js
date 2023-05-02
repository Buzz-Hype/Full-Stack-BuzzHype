const deletePost = async (req, res) => {
    const {
      session,
      db: { Posts },
      body: { user_id },
    } = req;
  
    const post = await Posts.deletePost(user_id);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = deletePost;