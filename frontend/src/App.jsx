/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React,{useEffect} from 'react'
import { io } from 'socket.io-client'

const App = () => {

  const socket = io("http://localhost:7000");

  useEffect(() => {
    socket.on("connect", ()=>{
      console.log("connected", socket.id);
    });

    socket.on('message',(data)=>{
      console.log(data)
    })

    socket.on('disconnect',(data)=>{
      console.log(data)
    })
  }, [])

  return () => (
    socket.disconnect()
  )
}

export default App