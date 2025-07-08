const express = require('express');
const cors = require('cors');

// Import your routes
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();

app.use(cors());
app.use(express.json());

// Mount your routes
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);


module.exports = app;
