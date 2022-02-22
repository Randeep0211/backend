const Product = require('../../models/product')
import { Request , Response } from 'express'

const filterBySetRange = async(req:Request,res:Response)=>{

  const {maxPrice , minPrice} = req.query
  try {
    const result = await Product.find({price:{$lt: maxPrice , $gte:minPrice}})
    res.json({result})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

module.exports = filterBySetRange
