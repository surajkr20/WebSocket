import express from 'express';

const app = express();
const port = 7000; // Define the port once and reuse

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
