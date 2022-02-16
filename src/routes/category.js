const express = require('express');
const routes = express.Router();

const createCategory = require('../controller/category');
const updateCategory = require('../controller/categoryUpdate');
const { categoryId, read } = require('../controller/categoryRead');

routes.param('categoryId', categoryId);

routes.post('/category/create', createCategory);
routes.put('/category/update/:categoryId', updateCategory);
routes.get('/category/read/:categoryId', read);

module.exports = routes;
