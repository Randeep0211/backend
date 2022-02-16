const Category = require('../models/category');

const updateCategory = (req, res) => {
  let id = req.params.categoryId;
  let update = req.body.name;
  Category.findByIdAndUpdate(id, {$set:{name:update}}, (error, result) => {
    if (error) {
      return res.status(403).json({
        error: 'Category could not be updated',
      });
    }

    res.json(result);
  });
};

module.exports = updateCategory;
