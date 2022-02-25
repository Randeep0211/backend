import Category from '../../models/category';
import {Request , Response} from 'express'

const readCategory = async (req:Request, res:Response) => {
  let id = req.params.categoryId;
  try {
    const response = await Category.findById(id);
    res.json({ response });
  } catch (error) {
    res.status(400).json({
      error: 'Category not found',
    });
  }
};

export default readCategory;
