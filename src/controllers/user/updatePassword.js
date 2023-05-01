const { isAuthorized } = require('../../utils/auth-utils');

const updatePassword = async (req, res) => {
    const {
      session,
      db: { User },
      params: { id },
      body: { password },
    } = req;
  
    if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const user = await User.find(id);
    if (!user) return res.sendStatus(404);
  
    const updatedPassword = await user.updatePassword(password);
    res.send(updatedPassword);
  };
  
  module.exports = updatePassword;
  