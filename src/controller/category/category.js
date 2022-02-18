const Category = require('../../models/category');

const createCategory = async (req, res) => {
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

module.exports = createCategory;
