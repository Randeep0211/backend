import Category from '../../models/category';
import {Request , Response} from 'express'

const createCategory = async (req:Request, res:Response) => {
  const category = new Category(req.body);

  try {
    const response = category.save();
    res.json({ category });
  } catch (error) {
    return res.status(400).json({
      error: 'error',
    });
  }
};

export default createCategory;
