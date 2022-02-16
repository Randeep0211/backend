const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/product');
const readProduct = require('../controller/productRead');

routes.post('/product', getProduct);

routes.get('/product/read', readProduct);

module.exports = routes;
