const Product = require('../../models/product');

const getProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const response = await product.save();
    res.json({ response });
  } catch (error) {
    return res.status(403).json({
      error: 'Product unable to get saved',
    });
  }
  console.log('req.body', req.body);
};

module.exports = getProduct;
