/* eslint-disable no-unused-vars */
import React from 'react'
import { io } from 'socket.io-client'

const App = () => {
  
  const socket = io("http://localhost:7000");

  return (
    <div>App</div>
  )
}

export default App