const express = require('express');
const path = require('path');
const postRoutes = require('./post_routes')
const userRoutes = require('./user_routes')
const commentRoutes = require('./comment_routes')

// const handleSessions = require('./middleware/handle-sessions');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const logRoutes = require('./middleware/log-routes');
// const routes = require('./routes');



const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use(handleCookieSessions);
app.use(logRoutes);
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);


module.exports = app;
