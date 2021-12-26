const net = require('net');

net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString('utf8'));
  });

  socket.write('HTTP/1.1 200 OK\n');
  socket.write('Server: node.js custom server\n');
  socket.write('Content-Type: text/html\n');
  socket.write('Content-Length: 21\n');
  socket.write('\n');
  socket.write('<h1>Hello world!!</h1>');

  socket.end();

}).listen(52273, () => {
  console.log('server is running at 127.0.0.1:52273');
});