const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
