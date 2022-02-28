import Product from '../../models/product';
import { Request, Response } from 'express';

const filterBySetRange = async (req: Request, res: Response) => {
  const { maxPrice, minPrice } = req.query;

  let price;
  try {
    const result = await Product.find({
      price: { $lt: maxPrice, $gte: minPrice },
    });
    if (maxPrice && !minPrice) {
      price = {
        $lte: maxPrice,
      };
    }

    if (!maxPrice && minPrice) {
      price = {
        $gte: minPrice,
      };
    }
    res.json({ result });
  } catch (error) {
    return res.status(403).json({
      error: 'Failed to filter',
    });
  }
};

export default filterBySetRange;
