const Category = require('../../models/category');
// const Product = require('../../models/product')
import {Request , Response} from 'express'


const groupCategory = async(req:Request,res:Response)=>{

 
  try {
    const response = await Category.aggregate([
      {
        $lookup:{
          from:'getProducts',
          localField:'name',
          foreignField:'name',
          as:'products'

        }
      }
    ])
    res.json({response})
  } catch (error) {
    res.status(400).json({
      error: 'Category not found',
    });
  }
}

module.exports= groupCategory