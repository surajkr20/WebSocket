import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const port = 7000; // Define the port

// Create an HTTP server
const server = createServer(app);

// Attach Socket.IO to the server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Ensure no trailing slash here
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log("user connected") 
    console.log("id : ", socket.id);

    socket.on('disconnect', () => {
        console.log("user disconnected", socket.id);
    });

    // const details = {
    //     fullname: {
    //         firstname: "suraj",
    //         lastname: "kumar"
    //     },
    // };

    // // send connection to specific client
    // socket.broadcast.emit('message', details);

    // // send msg to all connected clients
    // socket.emit('message', details);

});

// Start the HTTP server
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
