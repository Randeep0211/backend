import Product from '../../models/product'
import { Request , Response } from 'express'
const moment = require('moment')

// const today = moment().startOf('day')


const filterByDate = async(req:Request,res:Response)=>{

  const {start,end} = req.query

  console.log(req.query)
  

  const startDate = moment(start).startOf('day')
  console.log(startDate.toDate())
  const endDate = moment(end).endOf('day')
  try {
    // const response = await Product.find({createdAt:{ $gte: today.toDate(),
    // $lte: moment(today).endOf('day').toDate()}})
    // res.json({response})

    const response = await Product.find({createdAt:{$gte:startDate.toDate() , $lte:endDate.toDate()}})
    res.json({response})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

export default filterByDate;