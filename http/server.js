const http = require('http');

const server = http.createServer();

server.on('connection', function (code) {
  console.log('connection on');
});

server.on('request', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    serverName:'this is Node.js server'
  }));
});

server.on('close', function (code) {
  console.log('close on');
})



server.listen(52273, function () {
  console.log('Server is running at http://127.0.0.1:52273');
});