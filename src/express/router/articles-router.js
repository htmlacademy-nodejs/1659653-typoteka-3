const {Router} = require('express');

const articlesRouter = new Router();

articlesRouter.get('/category/:id', (req, res) => res.send('/category/:id - publication category'));
articlesRouter.get('/add', (req, res) => res.send('/add - add publication'));
articlesRouter.get('/edit/:id', (req, res) => res.send('/edit/:id - edit publication'));
articlesRouter.get('/:id', (req, res) => res.send('/:id - publication'));

module.exports = articlesRouter;
