const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

app.post('/upload', (req, res) => {
  const studentId = req.body.studentId;
  // Perform matching logic and handle anonymity
  // For simplicity, let's just send a response for now
  res.send(`Matched with friends for student ID: ${studentId}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
