const express = require('express');
const postController = require('./controllers/posts');
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

Router.get('/posts', postController.list)
Router.post('/posts', postController.create)


Router.delete('/posts/:id', postController.deletepost)


module.exports = Router;