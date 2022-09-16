'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.get('/', (req, res) => res.send('/ - general page'));
mainRouter.get('/register', (req, res) => res.send('/register - registration page'));
mainRouter.get('/login', (req, res) => res.send('/login - authorisation page'));
mainRouter.get('/search', (req, res) => res.send('/search - search page'));

module.exports = mainRouter;
