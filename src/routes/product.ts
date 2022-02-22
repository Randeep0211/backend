const express = require('express');
const routes = express.Router();
const getProduct = require('../controller/products/product');
const readProduct = require('../controller/products/productRead');
const updateProduct = require('../controller/products/productUpdate');
const deleteProduct = require('../controller/products/productDelete');
const filterProduct = require('../controller/products/productFilter');
const filterByRange = require('../controller/products/productFilter2');
const filterByUpperPrice = require('../controller/products/productFilter1');
const filterBySetRange = require('../controller/products/productFilter3')
const autoComplete = require('../controller/products/productFilter4')
const filterByDate = require('../controller/products/dateFilter')


routes.post('/product', getProduct);
routes.get('/product/read', readProduct);
routes.put('/product/update/:productId', updateProduct);
routes.delete('/product/delete/:productId', deleteProduct);
routes.get('/product/filter' , filterProduct);
routes.get('/product/filter/limit' , filterByRange);
routes.get('/product/filter/least' , filterByUpperPrice);
routes.get('/product/filter/range', filterBySetRange)
routes.get('/product/filter/auto', autoComplete)
routes.get('/product/filter/date' , filterByDate)

module.exports = routes;
