const Category = require('../../models/category');

const updateCategory = async (req, res) => {
  let id = req.params.categoryId;
  let update = req.body.name;

  try {
    const response = await Category.findByIdAndUpdate(id, {
      $set: { name: update },
    });
    res.json({ response });
  } catch (error) {
    return res.status(403).json({
      error: 'Category could not be updated',
    });
  }
};

module.exports = updateCategory;
