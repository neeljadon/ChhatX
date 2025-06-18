const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    console.log("GET /api/users hit");
  const sql = 'SELECT username FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    const users = results.map(row => ({ 
      name: row.username, 
      avatar: row.username.charAt(0).toUpperCase() 
    }));

    res.json(users);
  });
});

module.exports = router;
