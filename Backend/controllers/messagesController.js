const db = require('../db');

exports.getMessages = (req, res) => {
  const { sender, receiver } = req.params;
  const sql = `
    SELECT * FROM messages
    WHERE (sender = ? AND receiver = ?)
       OR (sender = ? AND receiver = ?)
    ORDER BY timestamp ASC
  `;

  db.query(sql, [sender, receiver, receiver, sender], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.sendMessage = (req, res) => {
  const { sender, receiver, message } = req.body;
  const sql = 'INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)';

  db.query(sql, [sender, receiver, message], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ success: true, messageId: result.insertId });
  });
};
