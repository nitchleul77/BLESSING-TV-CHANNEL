const express = require('express');
const router = express.Router();
const { getDb, saveDb } = require('../db/database');

router.post('/', async (req, res) => {
  try {
    const { name, testimony } = req.body;
    if (!name || !testimony) return res.status(400).json({ error: 'Name and testimony are required' });
    const db = await getDb();
    db.run('INSERT INTO testimonies (name, testimony) VALUES (?, ?)', [name, testimony]);
    saveDb();
    res.json({ success: true, message: 'Testimony submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const db = await getDb();
    const results = db.exec('SELECT * FROM testimonies WHERE approved = 1 ORDER BY created_at DESC LIMIT 20');
    const testimonies = results.length ? results[0].values.map(r => ({ id: r[0], name: r[1], testimony: r[2], created_at: r[4] })) : [];
    res.json(testimonies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
