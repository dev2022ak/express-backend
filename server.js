const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let submissions = [];

app.post('/api/submit', (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ message: 'Invalid form data' });
  }
  submissions.push(data);
  res.status(201).json({ message: 'Data submitted successfully' });
});

app.get('/api/data', (req, res) => {
  res.status(200).json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
