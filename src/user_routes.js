const userRouter = require('express').Router()
const userController = require('./controllers/user');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

userRouter.use(addModels);

userRouter.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
userRouter.post('/users', userController.create);
userRouter.post('/users/login', userController.login);

// Read
userRouter.get('/users', userController.list);
userRouter.get('/users/:id', userController.show);
userRouter.get('/me', userController.showMe);

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)

userRouter.get('/logged-in-secret', checkAuthentication, (req, res) => {

  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
userRouter.patch('/users/:id', checkAuthentication, userController.update);
userRouter.patch('/users/:id', checkAuthentication, userController.updatepass)

// Delete
userRouter.delete('/users/logout', userController.logout);

module.exports = userRouter;
