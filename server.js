// === server.js ===
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
})
.catch(err => console.error(err));