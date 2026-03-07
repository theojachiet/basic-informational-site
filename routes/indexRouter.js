let path = require('path');
const { Router } = require('express');

const indexRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

indexRouter.get('/', (req, res) => {
    res.render('index', { links: links })
})

indexRouter.get('/about', (req, res) => {
    res.sendFile(path.resolve('about.html'));
})

indexRouter.get('/contact', (req, res) => {
    res.sendFile(path.resolve('contact.html'));
})

module.exports = indexRouter;