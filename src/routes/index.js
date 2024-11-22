const express = require('express');
const router = express.Router();

// Example route
router.get('/dummy', (req, res) => {
  res.json({ message: 'Hello from the dummy route!' });
});

module.exports = router;
