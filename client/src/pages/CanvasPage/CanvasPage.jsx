import React, { useEffect, useState } from 'react';
import {
	subscribe,
	initiateSocketConnection,
	disconnectSocket,
} from "./socketio.service";
import Canvas from '../../components/Canvas'



function CanvasPage() {

useEffect(() => {
    initiateSocketConnection();
    subscribe((err, data) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    }
  }, []);


  return (
    <Canvas  />
  )
}
export default CanvasPage;
