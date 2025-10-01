const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Dark Mode Settings Page!');
});

// Endpoint to toggle dark mode
app.post('/toggle-dark-mode', (req, res) => {
  const isEnabled = req.body.enabled;
  // Logic to enable/disable dark mode here
  res.json({ message: `Dark mode ${isEnabled ? 'enabled' : 'disabled'}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});