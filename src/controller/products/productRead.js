const Product = require('../../models/product');

const readProduct = async (req, res) => {
  try {
    const result = await Product.find({});
    res.json({ result });
  } catch (error) {
    return res.status(403).json({
      error: 'Details could not be fetched',
    });
  }
};

module.exports = readProduct;
