import User from '../../models/user';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

const userSignUp = async (req: Request, res: Response) => {
  const user = new User(req.body);

  try {
    const response = await User.create(req.body);

    // res.json({
    //   name: response.name,
    //   email: response.email,
    // });

    const { name, email, password, _id } = response;
    const token = jwt.sign({ _id }, '234secret');

    res.json({ name, email, token });
  } catch (error) {
    return res.status(403).json({
      Error: 'Signup Failed',
    });
  }
};

export default userSignUp;
