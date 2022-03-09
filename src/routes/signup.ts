import express from 'express';

const routes = express.Router();

import userSignUp from '../controller/user/signup';

routes.post('/signup', userSignUp);

export default routes;
