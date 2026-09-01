const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.send('<h1>Página Inicial (Index)</h1>');
});

// GET /about
router.get('/about', (req, res) => {
  res.send('<h1>Página Sobre (about)</h1>');
});

// GET /data
router.get('/data', (req, res) => {
  res.send('<h1>Página Data (GET)</h1>');
});

// POST /data
router.post('/data', (req, res) => {
  res.send('<h1>Página Data (POST)</h1>');
});

module.exports = router;