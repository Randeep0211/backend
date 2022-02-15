const Product = require('../models/product');

const getProduct = (req, res) => {
  console.log('req.body', req.body);
  const product = new Product(req.body);

  product.save((error, data) => {
    if (error) {
      return res.json({
        error: 'product not stored',
      });
    }

    res.json({
      data,
    });
  });
};

module.exports = getProduct;
