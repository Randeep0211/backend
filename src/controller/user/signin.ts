import { Request, Response } from 'express';
import User from '../../models/user';
import crypto from 'crypto';

const userSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const response = await User.findOne({ email });

    console.log(response.password);

    // const data = await crypto
    //   .createHmac('sha1', this.salt)
    //   .update(password)
    //   .digest('hex');
  } catch (error) {}
};

export default userSignIn;
