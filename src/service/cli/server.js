'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const app = express();
const DEFAULT_PORT = 3000;
app.use(express.json());

// connect router
const mainRouter = require('./router/main-router');
const postsRouter = require('./router/posts-router');

app.use('/', mainRouter);
app.use('/posts', postsRouter);

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    app.listen(port)
      .on(`listening`, () => {
        console.info(chalk.green(`Успешное соединение на ${ port }`));
      })
      .on(`error`, ({ message }) => {
        console.error(chalk.red(`Ошибка при создании сервера: ${ message }`));
      });
  }
};
