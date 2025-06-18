const express = require('express');
const cors = require('cors');
require('dotenv').config();
const messageRoutes = require('./routes/messages');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
