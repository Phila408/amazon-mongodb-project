// === routes/customerRoutes.js ===
const express = require('express');
const router = express.Router();
const Customer = require('../Models/customer.model');

// Create
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read all
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;