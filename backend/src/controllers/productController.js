const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        ProductType: true,
      },
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { P_ID: id },
      include: {
        ProductType: true,
      },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE product
exports.createProduct = async (req, res) => {
  const { P_ID, PName, PSalePrice, PInitialPrice, PStockQuantity, Pt_ID } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        P_ID,
        PName,
        PSalePrice,
        PInitialPrice,
        PStockQuantity,
        Pt_ID,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// UPDATE product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { PName, PSalePrice, PInitialPrice, PStockQuantity, Pt_ID } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { P_ID: id },
      data: {
        PName,
        PSalePrice,
        PInitialPrice,
        PStockQuantity,
        Pt_ID,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { P_ID: id },
    });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
