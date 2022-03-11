import express from 'express';
import userSignUp from '../controller/user/signup';
import userSignIn from '../controller/user/signin';

const routes = express.Router();

routes.post('/signup', userSignUp);
routes.get('/signin', userSignIn);

export default routes;
