
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  description: String,
  rating: Number,

  reviews: [{
    userId: String,
    comment: String,
    rating: Number
  }]
});

module.exports = mongoose.model('Product', productSchema);
