// app.js
const express = require('express');
const app = express();
const port = 80;  // Change the port to 1000

app.get('/', (req, res) => {
  res.send('H! team this is a simple Node.js app for testing docker v4...');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
