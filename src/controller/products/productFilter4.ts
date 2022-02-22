const Product = require('../../models/product')
import { Request , Response } from 'express'

const autoComplete = async(req:Request,res:Response)=>{

  const {name} = req.query
  try {
    const result = await Product.find({}).autocomplete({name:'c'})
    res.json({result})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

module.exports = autoComplete