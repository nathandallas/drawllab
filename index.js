const app = require('express')();
const http = require('http').createServer(app);
const port = 8080;
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000']
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(port, () => console.log(`Listening on port ${port}`))