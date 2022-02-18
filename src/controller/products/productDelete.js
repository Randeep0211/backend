const Product = require('../../models/product');

const deleteProduct = async (req, res) => {
  let id = req.params.productId;

  try {
    const result = await Product.findByIdAndDelete(id);
    res.json({ Message: 'Product deleted successfuly', result });
  } catch (error) {
    return res.status(403).json({
      message: 'Product failed to delete',
    });
  }
};

module.exports = deleteProduct;
