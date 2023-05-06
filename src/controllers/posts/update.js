// const Posts = require('../../db/models/post');
const { isAuthorized } = require('../../utils/auth-utils');

const updatepost = async (req, res) => {
  const {
    session,
    db: { Posts },
    params: { id },
    body: { post_text },
  } = req;
  console.log(post_text)
//   if (!isAuthorized(id, session)) return res.sendStatus(403);

//   const user = await User.find(id);
//   if (!user) return res.sendStatus(404);

  const updatedUser = await Posts.update( id, post_text);
  res.send(updatedUser);
};

module.exports = updatepost;
