const Product = require('../../models/product');
import {Request , Response} from 'express'

const deleteProduct = async (req:Request, res:Response) => {
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
