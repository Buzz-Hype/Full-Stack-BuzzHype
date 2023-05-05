const findPost = async (req, res) => {
    const {
      session,
      db: { Posts },
      params: { id },
    } = req;
    const post = await Posts.find(id);
    // session.userId = user.id;
  if(!post) res.status(404).send(`Post with id ${id} does not exist`)
    res.status(200).send(post);
  };
  
  module.exports = findPost;
