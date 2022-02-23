// const express = require('express');
import express from 'express';
const routes = express.Router();

const createCategory = require('../controller/category/category');
const updateCategory = require('../controller/category/categoryUpdate');
const readCategory = require('../controller/category/categoryRead');
const groupCategory = require('../controller/category/categoryByProduct')

routes.post('/category/create', createCategory);
routes.put('/category/update/:categoryId', updateCategory);
routes.get('/category/read/:categoryId', readCategory);
// routes.get('/category/read/prdouct' , groupCategory);

module.exports = routes;
