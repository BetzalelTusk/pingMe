// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a port for the server
const PORT = 3000;

// Define a basic route ("/")
app.get('/', (req, res) => {
    res.send('Hello, Express is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

