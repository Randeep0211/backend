import Product from '../../models/product'
import { Request , Response } from 'express'
import paginate from 'mongoose-paginate-v2';

interface PageProps{
  page:number;
}
const filterByPages = async(req:Request,res:Response)=>{

  const { page = '1', limit = '5' } = <{page:string, limit:string}>req.query;

  try {

    const response = await Product.find({}).skip(parseInt(page) * parseInt(limit)).limit(parseInt(limit))
    res.json({response,currentPage:page})
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

export default filterByPages;