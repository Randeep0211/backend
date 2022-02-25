import Product from '../../models/product'
import { Request , Response } from 'express'

const autoComplete = async(req:Request,res:Response)=>{

  const {name} = <{name:string}>req.query
  try {
  const result = await Product.find({name:{$regex:new RegExp(name,'g')}})
    res.json({result})
    console.log(result)
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

export default autoComplete;