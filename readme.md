
#socket.io :- 
Socket.IO is a library that enables real-time, bidirectional, and event-based communication between web clients and servers.
 It is built on top of WebSockets and provides additional features such as automatic reconnections, fallback options, and event-based communication, making it a robust choice for real-time applications.

#installation of socket.io :-
=> to use server-side : npm install socket.io
=> to use client side : npm install socket.io-client

#Socket.IO events and their usage, which you can use for reference -

### **Socket.IO Events**

#### 1. **`connection`**
   - Triggered when a new client connects to the server.
   - **Server-side**:
     ```javascript
     io.on('connection', (socket) => {
         console.log('A user connected');
     });
     ```
   - **Client-side**: Automatically triggered when connected to the server.

#### 2. **`disconnect`**
   - Triggered when a client disconnects from the server.
   - **Server-side**:
     ```javascript
     socket.on('disconnect', () => {
         console.log('User disconnected');
     });
     ```
   - **Client-side**: Automatically triggered when disconnected from the server.

#### 3. **`message`**
   - Used to send a generic message from client to server or server to client.
   - **Server-side**:
     ```javascript
     socket.on('message', (data) => {
         console.log('Received message:', data);
     });
     ```
   - **Client-side**:
     ```javascript
     socket.emit('message', 'Hello server');
     ```

#### 4. **`emit()`**
   - Used for emitting a custom event from server to client or vice versa.
   - **Server-side**:
     ```javascript
     io.emit('custom-event', { message: 'Hello from server' });
     ```
   - **Client-side**:
     ```javascript
     socket.emit('custom-event', { message: 'Hello from client' });
     ```

#### 5. **`broadcast`**
   - Emits an event to all clients except the sender.
   - **Server-side**:
     ```javascript
     socket.broadcast.emit('event-name', data);
     ```

#### 6. **`join` and `leave`**
   - For joining and leaving a room.
   - **Server-side**:
     ```javascript
     socket.join('room1');
     socket.leave('room1');
     ```
   - **Client-side**: Automatically triggered when emitting events like `socket.emit('join', 'roomName')`.

#### 7. **`to()`**
   - Sends an event to specific rooms or clients.
   - **Server-side**:
     ```javascript
     io.to('room1').emit('message', 'Hello to room1');
     ```

#### 8. **`on`**
   - Used to listen for an event from the client.
   - **Server-side**:
     ```javascript
     socket.on('event-name', (data) => {
         console.log(data);
     });
     ```

#### 9. **`error`**
   - For sending error messages from client to server or server to client.
   - **Server-side**:
     ```javascript
     socket.on('error', (errorMsg) => {
         console.log('Error occurred:', errorMsg);
     });
     ```
   - **Client-side**:
     ```javascript
     socket.emit('error', 'An error occurred');
     ```

#### 10. **`reconnect`**
   - Emitted when the client is automatically attempting to reconnect.
   - **Client-side**:
     ```javascript
     socket.on('reconnect', (attemptNumber) => {
         console.log(`Reconnected after ${attemptNumber} attempts`);
     });
     ```

#### 11. **`reconnect_attempt`**
   - Emitted when the client attempts to reconnect.
   - **Client-side**:
     ```javascript
     socket.on('reconnect_attempt', (attemptNumber) => {
         console.log('Reconnecting attempt:', attemptNumber);
     });
     ```

#### 12. **`reconnect_failed`**
   - Emitted when the client fails to reconnect.
   - **Client-side**:
     ```javascript
     socket.on('reconnect_failed', () => {
         console.log('Reconnection failed');
     });
     ```

#### 13. **`ping` and `pong`**
   - Ping and pong events are used to monitor the health of the connection.
   - **Client-side**:
     ```javascript
     socket.on('ping', () => {
         console.log('Ping received');
     });
     socket.emit('pong');
     ```

#### 14. **`connect_error`**
   - Triggered when the connection attempt to the server fails.
   - **Client-side**:
     ```javascript
     socket.on('connect_error', (err) => {
         console.log('Connection failed:', err);
     });
     ```

#### 15. **`connect_timeout`**
   - Triggered when the connection attempt times out.
   - **Client-side**:
     ```javascript
     socket.on('connect_timeout', () => {
         console.log('Connection timeout');
     });
     ```

### **Namespace Events**
Socket.IO allows you to create multiple namespaces for different functionalities:

#### 1. **`connect`**
   - Triggered when a client connects to a specific namespace.
   - **Server-side**:
     ```javascript
     const nsp = io.of('/namespace');
     nsp.on('connection', (socket) => {
         console.log('Client connected to namespace');
     });
     ```

#### 2. **`disconnect`**
   - Triggered when a client disconnects from a specific namespace.
   - **Server-side**:
     ```javascript
     const nsp = io.of('/namespace');
     nsp.on('disconnect', () => {
         console.log('Client disconnected from namespace');
     });
     ```

#### 3. **Custom Event Namespacing**
   - You can emit custom events for specific namespaces as well.
   - **Server-side**:
     ```javascript
     nsp.emit('message', 'Hello from namespace');
     ```
   - **Client-side**:
     ```javascript
     const socket = io('/namespace');
     socket.emit('message', 'Hello to specific namespace');
     ```

### **Room Events**
Rooms are a special feature in Socket.IO that allow clients to join and leave rooms.

#### 1. **`join`**
   - Allows clients to join a room.
   - **Server-side**:
     ```javascript
     socket.join('room1');
     ```

#### 2. **`leave`**
   - Allows clients to leave a room.
   - **Server-side**:
     ```javascript
     socket.leave('room1');
     ```

#### 3. **`in`**
   - Emits events to clients in a room.
   - **Server-side**:
     ```javascript
     io.in('room1').emit('message', 'Hello to all in room1');
     ```

#### 4. **`to()`**
   - Emit events to specific rooms or clients.
   - **Server-side**:
     ```javascript
     io.to('room1').emit('message', 'Hello room1');
     ```

---

### Summary of Useful Socket.IO Methods

- **`socket.emit('event-name', data)`**: Emit an event to the server.
- **`socket.on('event-name', callback)`**: Listen for events from the server.
- **`socket.broadcast.emit('event-name', data)`**: Broadcast to all other connected clients except the sender.
- **`socket.join('room-name')`**: Join a room.
- **`socket.leave('room-name')`**: Leave a room.
- **`socket.to('room-name').emit('event-name', data)`**: Emit an event to a specific room.

---

### Example Code:

#### Server-side:
```javascript
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.emit('message', 'Welcome to the server');
    
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg); // Broadcast to all clients
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
```

#### Client-side:
```javascript
const socket = io('http://localhost:7000');

// Receiving a message from the server
socket.on('message', (msg) => {
    console.log(msg);
});

// Sending a message to the server
socket.emit('chat message', 'Hello, server!');

