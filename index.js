const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const PORT = process.env.PORT || 8080;


io.on('connection', onConnection);

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));