import Product from '../../models/product';

import { Request, Response } from 'express';

const deleteManyProducts = async (req: Request, res: Response) => {
  try {
    const response = await Product.deleteMany(req.body);

    res.json({ response });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      Error: 'Products failed to get Deleted',
    });
  }
};

export default deleteManyProducts;
