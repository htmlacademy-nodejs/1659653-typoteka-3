'use strict';

const express = require(`express`);
const app = express();
const chalk = require(`chalk`);
const path = require(`path`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

// register templates
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

// Register routes
const myRouter = require(`./router/my-routes`);
const articlesRouter = require(`./router/articles-router`);
const mainRouter = require(`./router/main-routes`);

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

// Start server
app.listen(DEFAULT_PORT, (err) => {
  if (err) {
    return console.error(chalk.red(`Ошибка запуска: ${ err.message }`));
  }
  return console.info(chalk.blue(`Сервер запущен на порту ${ DEFAULT_PORT }`))
})

