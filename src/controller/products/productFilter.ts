const Product = require('../../models/product')
import { Request , Response } from 'express'


const filterProduct = async(req:Request , res:Response)=>{
  const {price} = req.query;
 
  try {
    const response = await Product.find({price})
    res.json({response})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

module.exports = filterProduct