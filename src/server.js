const express = require('express');
const path = require('path');
const post_routes = require('./post_routes')
const user_routes = require('./user_routes')
const comment_routes = require('./comment_routes')

// const handleSessions = require('./middleware/handle-sessions');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const logRoutes = require('./middleware/log-routes');
// const routes = require('./routes');

const app = express();

app.use(handleCookieSessions);
app.use(post_routes);
app.use(user_routes);
app.use(comment_routes);
app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/api', routes);

module.exports = app;
