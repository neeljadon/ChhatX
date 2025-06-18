const express = require('express');
const router = express.Router();
const { getMessages, sendMessage } = require('../controllers/messagesController');

router.get('/:sender/:receiver', getMessages);
router.post('/', sendMessage);

module.exports = router;
