const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET customer by ID
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await prisma.customer.findUnique({
      where: { C_ID: id },
    });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE customer
exports.createCustomer = async (req, res) => {
  const { C_ID, Cname, Surname, Tel, Address } = req.body;
  try {
    const newCustomer = await prisma.customer.create({
      data: { C_ID, Cname, Surname, Tel, Address },
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// UPDATE customer
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { Cname, Surname, Tel, Address } = req.body;
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { C_ID: id },
      data: { Cname, Surname, Tel, Address },
    });
    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE customer
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.customer.delete({
      where: { C_ID: id },
    });
    res.json({ message: 'Customer deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
