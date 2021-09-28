import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Canvas from '../../components/Canvas'



const CanvasPage = () => {

  const [socket, setSocket] = useState('');

  useEffect(() => {
    const newSocket = io(`http://localhost:3000/canvas`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
	  <>
    { socket ? (
        <div className="container">
          <Canvas socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </>
  )
}
export default CanvasPage;
