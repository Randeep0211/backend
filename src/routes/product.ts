const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/products/product');
const readProduct = require('../controller/products/productRead');
const updateProduct = require('../controller/products/productUpdate');
const deleteProduct = require('../controller/products/productDelete');
const filterProduct = require('../controller/products/productFilter')


routes.post('/product', getProduct);
routes.get('/product/read', readProduct);
routes.put('/product/update/:productId', updateProduct);
routes.delete('/product/delete/:productId', deleteProduct);
routes.get('/product/filter' , filterProduct)


module.exports = routes;
