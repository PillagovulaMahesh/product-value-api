const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/total', (req, res) => {
  const products = req.body.products; 

  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Invalid input, expected an array of products.' });
  }

  const totalValue = products.reduce((total, product) => {
    return total + (product.price || 0); 
  }, 0);

  res.json({ totalValue });
});

module.exports = router;
