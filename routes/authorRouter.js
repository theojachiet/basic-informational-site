const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController.js');

const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('All books'));
authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;