const express = require('express');
const app = express();

const DEFAULT_PORT = 8080;

// Register routes
const myRouter = require('./router/my-routes');
const articlesRouter = require('./router/articles-router');
const mainRouter = require('./router/main-routes');

app.use('/', mainRouter);
app.use('/my', myRouter);
app.use('/articles', articlesRouter);

// Start server
app.listen(DEFAULT_PORT);
