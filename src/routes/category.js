const express = require('express');
const routes = express.Router();

const createCategory = require('../controller/category/category');
const updateCategory = require('../controller/category/categoryUpdate');
const readCategory = require('../controller/category/categoryRead');

routes.post('/category/create', createCategory);
routes.put('/category/update/:categoryId', updateCategory);
routes.get('/category/read/:categoryId', readCategory);

module.exports = routes;
