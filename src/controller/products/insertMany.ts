import Product from '../../models/product';

import { Request, Response } from 'express';

const insertMultitpleProducts = async (req: Request, res: Response) => {
  let payload = req.body;
  try {
    const response = await Product.insertMany(payload);
    console.log(response);
    res.json({ response });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      error: 'Data unable to add',
    });
  }
};

export default insertMultitpleProducts;
