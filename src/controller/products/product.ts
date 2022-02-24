const Product = require('../../models/product');
import mongoose from 'mongoose'

import {Request , Response} from 'express'
import { ObjectId } from 'mongodb';



const getProduct = async (req:Request, res:Response) => {



  try {
    const response = await Product.create(req.body);
    res.json({ response });
  } catch (error) {
    return res.status(403).json({
      error: 'Product unable to get saved',
    });
  }
  console.log('req.body', req.body);
};

module.exports = getProduct;
