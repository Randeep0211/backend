const { response } = require('express');
const Category = require('../../models/category');

const readCategory = async (req, res) => {
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

module.exports = readCategory;
