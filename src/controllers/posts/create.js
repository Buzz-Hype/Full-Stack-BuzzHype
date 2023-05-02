const createPost = async (req, res) => {
    const {
      session,
      db: { Posts },
      body: { user_id, post_text },
    } = req;
  
    const post = await Posts.create(user_id, post_text);
<<<<<<< HEAD
    session.userId = user.id;
=======

>>>>>>> main
  
    res.send(post);
  };
  
  module.exports = createPost;