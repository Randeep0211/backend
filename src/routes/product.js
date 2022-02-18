const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/products/product');
const readProduct = require('../controller/products/productRead');
const updateProduct = require('../controller/products/productUpdate');
const deleteProduct = require('../controller/products/productDelete');

routes.post('/product', getProduct);
routes.get('/product/read', readProduct);
routes.put('/product/update/:productId', updateProduct);
routes.delete('/product/delete/:productId', deleteProduct);

module.exports = routes;
