const deletedcomment = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { id },
    } = req;
  console.log(id)
    const post = await Comment.delete( id);
    // session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = deletedcomment;