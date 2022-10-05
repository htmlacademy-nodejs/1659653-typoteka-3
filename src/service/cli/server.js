'use strict';

const chalk = require(`chalk`);
const express = require('express');
const app = express();
const fs = require(`fs`).promises;
const DEFAULT_PORT = 3000;
const FILENAME = `mocks.json`;
const {HttpCode} = require(`../../constants`);

app.use(express.json());
app.get('/', (req, res) => res.send(`/ - home page для просмотра списка файла перейдите по ссылке <a href="/posts">Список</a>`));
app.get('/posts', async (req, res) => {
  const notFoundMessageText = `Not found`;
  try {
    const file = await fs.readFile(FILENAME);
    const mock = JSON.parse(file);
    const mess = mock.map((item) => `<li>${ item.title }</li>`).join(``);
    sendResponse(res, HttpCode.OK, `<ul>${ mess }</ul>`);
  } catch (e) {
    sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
  }
})
const sendResponse = (res, statusCode, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${ message }</body>
    </html>`.trim();

  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  res.end(template);
};
module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    app.listen(port, (err) => {
      if (err) console.error(chalk.red(`Ошибка при создании сервера: ${ err.message }`));
      else console.info(chalk.green(`Ожидаю соединений на ${ port }`));
    })
  }
};
