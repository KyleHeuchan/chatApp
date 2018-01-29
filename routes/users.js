const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/users', (req, res) => {
res.sendFile(path.resolve(__dirname, '../view/users.html'))
});

module.exports = router;
