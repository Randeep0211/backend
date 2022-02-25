import Product from '../../models/product'
import {Request , Response} from 'express'

const updateProduct = async (req:Request, res:Response) => {
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

export default updateProduct;
