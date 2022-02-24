const Product = require('../../models/product')
import { Request , Response } from 'express'


const GroupByCategory = async(req:Request,res:Response)=>{
  
  try {
    const response = await Product.aggregate([
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
    console.log(error)
  }
}

module.exports = GroupByCategory
