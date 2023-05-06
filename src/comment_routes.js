const commentRouter = require('express').Router();
const commentController = require('./controllers/comments');
const addModels = require('./middleware/add-models');


commentRouter.use(addModels);


commentRouter.post('/comment', commentController.createComment)
commentRouter.delete('/comment/:id', commentController.deleteComment)
commentRouter.get('/post/:id/comment', commentController.listComments)

module.exports = commentRouter;
