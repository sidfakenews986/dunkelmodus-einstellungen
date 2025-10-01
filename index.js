const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Willkommen zu den Dunkelmodus-Einstellungen!');
});

// Endpoint zum Aktivieren des Dunkelmodus
app.post('/toggle-dark-mode', (req, res) => {
  const isEnabled = req.body.enabled;
  // Logik zum Aktivieren/Deaktivieren des Dunkelmodus hier
  res.json({ message: `Dunkelmodus ${isEnabled ? 'aktiviert' : 'deaktiviert'}` });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});