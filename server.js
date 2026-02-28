// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // TODO: integrate with email provider or save to DB
  console.log('New contact enquiry:', req.body);

  return res.json({ ok: true });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
