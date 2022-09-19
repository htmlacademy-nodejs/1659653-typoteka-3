const { Router } = require('express');

const myRouter = new Router();

myRouter.get('/', (req, res) => res.send('/my/ - my publication page'));
myRouter.get('/comments', (req, res) => res.send('/comments - comments in publication page'));
myRouter.get('/categories', (req, res) => res.send('/categories - categories page'));

module.exports = myRouter;
