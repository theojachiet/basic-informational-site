const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    //console.log(req.url)

    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html');

        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == '/about') {
        res.setHeader('Content-Type', 'text/html');

        fs.readFile('./about.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == '/contact-me') {
        res.setHeader('Content-Type', 'text/html');

        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        })
    } else {
        res.setHeader('Content-Type', 'text/html');

        fs.readFile('./404.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
})

