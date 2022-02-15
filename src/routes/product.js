const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/product');

routes.post('/product', getProduct);

module.exports = routes;
