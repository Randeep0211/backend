const Product = require('../models/product');

const updateProduct = (req, res) => {
  let id = req.params.productId;

  let update1 = req.body.name;
  let update2 = req.body.quantity;
  let update3 = req.body.price;

  Product.findByIdAndUpdate(
    id,
    {
      $set: {
        name: update1,
        quantity: update2,
        price: update3,
      },
    },
    (error) => {
      if (error) {
        return res.status(403).json({
          error: 'Product failed to updated',
        });
      }

      res.json({
        Message: 'Product updated successfully',
      });
    }
  );
};

module.exports = updateProduct;
