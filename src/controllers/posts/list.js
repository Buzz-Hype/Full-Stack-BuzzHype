const listposts = async (req, res) => {
  const { Posts } = req.db;
  const users = await Posts.list();
  res.send(users);
};

module.exports = listposts;
