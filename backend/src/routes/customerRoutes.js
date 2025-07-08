const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// GET /api/customers
router.get('/', customerController.getAllCustomers);

// POST /api/customers
router.post('/', customerController.createCustomer);

// GET /api/customers/:id
router.get('/:id', customerController.getCustomerById);

// PUT /api/customers/:id
router.put('/:id', customerController.updateCustomer);

// DELETE /api/customers/:id
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
