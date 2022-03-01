import Product from '../../models/product';

import { Request, Response } from 'express';

const updateMultipleProducts = async (req: Request, res: Response) => {
  let payload = req.body;
  // let query = req.body;

  // const {  } = <
  //   { name: string; quantity: string; price: string }
  // >req.query;

  let query = req.body.query;

  try {
    const response = await Product.updateMany(query, { $set: payload });

    console.log(req.body);
    res.json({ response });
  } catch (error) {
    return res.status(403).json({
      error: 'Product failed to update',
    });
  }
};

export default updateMultipleProducts;
