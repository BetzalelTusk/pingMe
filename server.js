// Import Express
const express = require("express");
const app = express();
const PORT = 3000; // Set port as such

app.use((req, res, next) => {
  req.customMessage = "This message was added by middleware!!";
  next();
});

// Define a basic route ("/")
app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});

app.get("/check", (req, res) => {
  res.send("This is the /check endpoint.");
});

app.get("/greet/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}! ${req.customMessage}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
