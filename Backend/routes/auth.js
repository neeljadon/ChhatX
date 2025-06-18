// routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error checking user:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      res.json({ message: 'Login successful', user: { username } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

 router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing Details" });
  }

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    res.status(201).json({ success: true, message: 'User registered successfully' });
  });
});

module.exports = router;
