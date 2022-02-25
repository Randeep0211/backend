import  express  from 'express';
const routes = express.Router();
import createProduct from '../controller/products/product';
import readProduct from '../controller/products/productRead';
import updateProduct from '../controller/products/productUpdate';
import deleteProduct from '../controller/products/productDelete';
import filterProduct from '../controller/products/productFilter';
import filterByRange from '../controller/products/productFilter2';
import filterByUpperPrice from '../controller/products/productFilter1';
import filterBySetRange from '../controller/products/productFilter3';
import autoComplete from '../controller/products/productFilter4';
import filterByDate from '../controller/products/dateFilter';
import filterByPrice from '../controller/products/priceSorting';
import filterByPages from '../controller/products/pagination';


routes.post('/product', createProduct);
routes.get('/product/read', readProduct);
routes.put('/product/update/:productId', updateProduct);
routes.delete('/product/delete/:productId', deleteProduct);
routes.get('/product/filter' , filterProduct);
routes.get('/product/filter/limit' , filterByRange);
routes.get('/product/filter/least' , filterByUpperPrice);
routes.get('/product/filter/range', filterBySetRange);
routes.get('/product/auto', autoComplete);
routes.get('/product/filter/date' , filterByDate);
routes.get('/product/filter/price'  ,filterByPrice);
routes.get('/product/filter/page' , filterByPages);
routes.get('product/filter' , filterByDate , filterByPages , autoComplete , filterByPrice  )

export default routes;
