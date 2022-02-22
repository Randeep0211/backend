const Product = require('../../models/product')
import { Request , Response } from 'express'
const moment = require('moment')

const today = moment().startOf('day')


const filterByDate = async(req:Request,res:Response)=>{

  const {createdAt} = req.query
  const startDate= createdAt
  const endDate = createdAt
  
  try {
    // const response = await Product.find({createdAt:{ $gte: today.toDate(),
    // $lte: moment(today).endOf('day').toDate()}})
    // res.json({response})

    const response = await Product.find({date:{$gte:startDate , $lt:endDate}})
    res.json({response})
    
  } catch (error) {
    return res.status(403).json({
      error:"Failed to filter"
    })
  }
}

module.exports = filterByDate