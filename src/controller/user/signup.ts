import User from '../../models/user';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

function encryptPassword(password: string) {
  const salt = uuidv4();
  return crypto.createHmac('sha256', salt).update(password).digest('hex');
}

const userSignUp = async (req: Request, res: Response) => {
  const user = new User(req.body);

  try {
    // user.encryptPassword();
    const response = await user.create({
      ...req.body,
      password: encryptPassword(req.body.password),
    });

    // res.json({
    //   name: response.name,
    //   email: response.email,
    // });

    const { name, email, password, _id } = response;
    const token = jwt.sign({ _id }, '234secret');

    res.json({ name, email, token, p: password });
  } catch (error) {
    return res.status(403).json({
      Error: 'Signup Failed',
    });
  }
};

export default userSignUp;
