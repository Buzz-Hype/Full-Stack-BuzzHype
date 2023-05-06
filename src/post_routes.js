const postRouter= require('express').Router();
const postController = require('./controllers/posts');
const addModels = require('./middleware/add-models');

postRouter.use(addModels);

postRouter.get('/post/:id', postController.find)
postRouter.post('/post', postController.create)
postRouter.patch('/post/:id', postController.update) 
postRouter.delete('/post/:id', postController.deletepost)
postRouter.get('/post', postController.list)



module.exports = postRouter;