const Product = require('../models/product');

const readProduct = (req, res) => {
  Product.find({}).exec((error, result) => {
    if (error) {
      return res.status(403).json({
        error: 'Details could not be fetched',
      });
    }

    res.json({
      result,
    });
  });
};

module.exports = readProduct;
