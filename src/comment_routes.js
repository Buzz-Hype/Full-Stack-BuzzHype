const express = require('express');
const commentController = require('./controllers/comments');
const addModels = require('./middleware/add-models');

const Router = express.Router();
Router.use(addModels);

// Router.get('/cookieCounter', (req, res) => {
//     const { session } = req;
//     console.log(session);
//     session.viewCount = (session.viewCount || 0) + 1;
//     console.log(session.viewCount);
//     res.status(200).send({ count: session.viewCount });
//   });
Router.post('/comment', commentController.createComment)
Router.delete('/comment', commentController.deleteComment)
<<<<<<< HEAD
Router.get('/comment', commentController.listComments)
=======
Router.get('/comment', commentController.listComments)

module.exports = Router;
>>>>>>> 7f9fdaee0e227792fa8409ebbd705ee3e9dd5e0f
