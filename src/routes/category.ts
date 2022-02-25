// const express = require('express');
import express from 'express';
const routes = express.Router();

import createCategory from '../controller/category/category';
import updateCategory from '../controller/category/categoryUpdate';
import readCategory from '../controller/category/categoryRead';
import groupCategory from '../controller/category/categoryByProduct';

routes.post('/category/create', createCategory);
routes.put('/category/update/:categoryId', updateCategory);
routes.get('/category/read/:categoryId', readCategory);
routes.get('/category/product' , groupCategory);

export default routes;
