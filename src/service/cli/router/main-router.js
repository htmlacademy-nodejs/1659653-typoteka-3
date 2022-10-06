'use strict';

const {Router} = require('express');
const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.send(`/ - home page для просмотра списка файла перейдите по ссылке <a href="/posts">Список</a>`));

module.exports = mainRouter;
