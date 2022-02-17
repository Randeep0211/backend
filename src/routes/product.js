const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/product');
const readProduct = require('../controller/productRead');
const updateProduct = require('../controller/productUpdate');

routes.post('/product', getProduct);

routes.get('/product/read', readProduct);

routes.put('/product/update/:productId', updateProduct);

module.exports = routes;
