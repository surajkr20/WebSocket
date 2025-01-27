import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const port = 7000; // Define the port

// Create an HTTP server
const server = createServer(app);

// Attach Socket.IO to the server and enabling cors package for vite
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173/",
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
  console.log('User connected');
  console.log('User ID:', socket.id);

});

// Start the HTTP server
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
