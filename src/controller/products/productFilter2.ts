import Product from '../../models/product'
import { Request , Response } from 'express'

const filterByRange = async(req:Request,res:Response)=>{

  const {price} = req.query
  try {
    const result = await Product.find({price:{$lt:price}})
    res.json({result})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

export default filterByRange;