let path = require('path');
const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})

indexRouter.get('/about', (req, res) => {
    res.sendFile(path.resolve('about.html'));
})

indexRouter.get('/contact', (req, res) => {
    res.sendFile(path.resolve('contact.html'));
})

module.exports = indexRouter;