const {Router} = require(`express`);

const postsRouter = new Router();
const fs = require(`fs`).promises;

const FILENAME = `mocks.json`;

postsRouter.get(`/`, async (req, res) => {
  try {
    const file = await fs.readFile(FILENAME)
    const mock = JSON.parse(file);
    res.send(mock);
  } catch (e) {
    res.send([]);
  }
});
module.exports = postsRouter;
