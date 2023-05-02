const deletePost = async (req, res) => {
    const {
      session,
      db: { Posts },
      body: { id },
    } = req;
  
    const post = await Posts.delete(id);
<<<<<<< HEAD
    session.userId = user.id;
=======
    // session.userId = user.id;
>>>>>>> main
  
    res.send(post);
  };
  
  module.exports = deletePost;