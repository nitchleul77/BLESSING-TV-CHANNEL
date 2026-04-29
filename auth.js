const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb, saveDb } = require('../db/database');

const JWT_SECRET = 'blessing-church-secret-key-2024';

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
    const db = await getDb();
    const existing = db.prepare('SELECT id FROM users WHERE email = ?');
    existing.bind([email]);
    if (existing.step()) { existing.free(); return res.status(400).json({ error: 'Email already registered' }); }
    existing.free();
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    saveDb();
    const idRow = db.exec('SELECT last_insert_rowid() as id');
    const id = idRow[0].values[0][0];
    const token = jwt.sign({ id, name, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id, name, email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'All fields are required' });
    const db = await getDb();
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    stmt.bind([email]);
    if (!stmt.step()) { stmt.free(); return res.status(400).json({ error: 'Invalid credentials' }); }
    const row = stmt.getAsObject();
    stmt.free();
    const valid = await bcrypt.compare(password, row.password);
    if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: row.id, name: row.name, email: row.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id: row.id, name: row.name, email: row.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

module.exports = router;
