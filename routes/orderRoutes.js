const express = require('express');
const router = express.Router();
const Order = require('../Models/orders.model');

// Create
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

// view orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId') 
      .populate('products.productId');
    res.send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update orders
router.put('/:id', async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
