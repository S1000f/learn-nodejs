const tcpServer = require('net');

tcpServer.createServer(socket => {
  socket.on('data', (data => {
    console.log(data.toString('utf8'));

    socket.write(data);
  }));
}).listen(52273, () => {
  console.log('TCP server is running at 127.0.0.1:52273');
});

