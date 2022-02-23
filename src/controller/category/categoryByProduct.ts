const Category = require('../../models/category');
const Product = require('../../models/product')
import {Request , Response} from 'express'


const groupCategory = async(req:Request,res:Response)=>{

  const product = new Product(req.query.name)
  try {
    const response = await Category.find({product})
    res.json({response})
  } catch (error) {
    res.status(400).json({
      error: 'Category not found',
    });
  }
}

module.exports= groupCategory