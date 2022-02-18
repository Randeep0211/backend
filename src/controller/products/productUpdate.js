const Product = require('../../models/product');

const updateProduct = async (req, res) => {
  let id = req.params.productId;

  let update1 = req.body.name;
  let update2 = req.body.quantity;
  let update3 = req.body.price;

  try {
    const response = await Product.findByIdAndUpdate(id, {
      $set: {
        name: update1,
        quantity: update2,
        price: update3,
      },
    });
    res.json({ Message: 'Product updated successfully', response });
  } catch (error) {
    return res.status(403).json({
      error: 'Product failed to updated',
    });
  }
};

module.exports = updateProduct;
