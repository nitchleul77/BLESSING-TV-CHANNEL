const express = require('express');
const router = express.Router();
const { getDb, saveDb } = require('../db/database');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });
    const db = await getDb();
    db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    saveDb();
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const db = await getDb();
    const results = db.exec('SELECT * FROM contacts ORDER BY created_at DESC');
    const contacts = results.length ? results[0].values.map(r => ({ id: r[0], name: r[1], email: r[2], message: r[3], created_at: r[4] })) : [];
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
