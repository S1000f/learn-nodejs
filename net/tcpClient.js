const net = require('net');

const socket = net.connect(52273, '127.0.0.1', () => {
  console.log('client start');
});

socket.on('data', data => {
  console.log('client has received data : ', data.toString('utf8'));
});

process.stdin.resume();
process.stdin.on('data', chunk => {
  socket.write(chunk.toString());
});