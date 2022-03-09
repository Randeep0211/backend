import mongoose, { VirtualType } from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { Response } from 'express';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 32,
  },

  password: {
    type: String,
    required: true,
  },
  message: String,

  salt: String,
});

userSchema.pre('save', async function (next) {
  if (this.password) {
    this.password = await crypto
      .createHmac('sha256', '123secret')
      .update(this.password)
      .digest('hex');
  }
  // if (this.password) {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }

  next();
});

// userSchema.virtual('id').get(function (this: { _id: mongoose.ObjectId }) {
//   return String(this._id);
// });

export default mongoose.model('User', userSchema);
