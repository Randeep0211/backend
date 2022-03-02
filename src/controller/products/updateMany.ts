import Product from '../../models/product';

import { Request, Response } from 'express';

const updateMultipleProducts = async (req: Request, res: Response) => {
  let data = req.body.data;

  // const {  } = <
  //   { name: string; quantity: string; price: string }
  // >req.query;

  // let payload = { quantity: { $eq: 10 }, price: { $eq: 30 } };

  let quantity = { $eq: req.body.quantity };
  let price = { $eq: req.body.price };

  try {
    const response = await Product.updateMany({}, { $set: data });
    // if (!query) {
    //   return res.status(403).json({
    //     Error: 'Failed. Please pass some data to update',
    //   });
    // }

    console.log({ query: { quantity, price } });
    console.log(data);

    res.json({ response });
  } catch (error) {
    return res.status(403).json({
      error: 'Product failed to update',
    });
  }
};

export default updateMultipleProducts;
