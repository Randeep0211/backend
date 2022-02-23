const Product = require('../../models/product')
import { Request , Response } from 'express'

const filterByPrice = async(req:Request,res:Response)=>{
  
  const {price}=req.query

  try {
    const response = await Product.find({}).sort({price:price})
    res.json({response})
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

module.exports = filterByPrice