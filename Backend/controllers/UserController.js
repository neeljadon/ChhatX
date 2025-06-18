// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// // Corrected signup function
//  router.post('/signup', (req, res) => {
//   const { username, password } = req.body;
  
//   if (!username || !password) {
//     return res.status(400).json({ success: false, message: "Missing Details" });
//   }

//   const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

//   db.query(sql, [username, password], (err, result) => {
//     if (err) {
//       console.error('Error inserting user:', err);
//       return res.status(500).json({ success: false, message: 'Server error' });
//     }
//     res.status(201).json({ success: true, message: 'User registered successfully' });
//   });
// });

// module.exports = router;

