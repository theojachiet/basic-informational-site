const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req)
}).listen(3000);

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
})

