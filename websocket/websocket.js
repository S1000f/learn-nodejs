const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/client.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('setTicker', (data) => {
    console.log('client set ticker : ' + data);
    socket.emit('getTicker', data);
  });

});


server.listen(3000, () => {
  console.log('listening on *:3000');
});
