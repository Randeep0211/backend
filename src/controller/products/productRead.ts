const Product = require('../../models/product');
import {Request , Response} from 'express'

const readProduct = async (req:Request , res:Response) => {
  try {
    const result = await Product.find({});
    res.json({ result });
  } catch (error) {
    return res.status(403).json({
      error: 'Details could not be fetched',
    });
  }
};

module.exports = readProduct;
