let path = require('path');
const { Router } = require('express');

const indexRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "contact", text: "Contact" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter.get('/', (req, res) => {
    res.render('index', { links: links, users: users })
})

indexRouter.get('/about', (req, res) => {
    res.render('about');
})

indexRouter.get('/contact', (req, res) => {
    res.sendFile(path.resolve('contact.html'));
})

module.exports = indexRouter;