
const listPosts = async (req, res) => {
    const {
      session,
      db: { Posts },
      body: { post_id },
    } = req;
  
    const post = await Posts.list( post_id);
    // session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = listPosts;
