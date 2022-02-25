import Category from '../../models/category';
// const Product = require('../../models/product')
import {Request , Response} from 'express'



const db:any = ''

const groupCategory = async(req:Request,res:Response)=>{

 
  try {
    const response = await Category.aggregate([
      {
        $lookup:{
          from:'products',
          localField:'_id',
          foreignField:'category',
          as:'products_docs'

        }
      }
    ])

    // const response = await Category.aggregate.lookup({
    //   from:'products',
    //   localField:'_id',
    //   foreignField:'categories',
    //   as:'products'
    // })
    res.json({response})
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export default groupCategory