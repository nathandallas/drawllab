import { io } from 'socket.io-client';

let socket;
export const initiateSocketConnection = (room) => {
  socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);
	console.log(`Connecting socket...`);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const subscribe = (cb) => {
	socket.emit('my drawing', 'Hello');
  if (!socket) return(true);
  socket.on('my broadcast', draw => {
    console.log('Websocket event received!');
    return cb(null, draw);
  });
}

export const sendData = (room, data) => {
  if (socket) socket.emit('chat', { data, room });
}
