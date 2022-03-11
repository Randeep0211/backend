import mongoose, { VirtualType } from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Timestamp } from 'mongodb';

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// userSchema.virtual('password').set(function(password){
//   this.password = password
// })

userSchema.methods = {
  encryptPassword: function (password: string) {
    const salt = uuidv4();
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
  },
};

// userSchema.pre('save', async function (next) {
//   if (this.password) {
//     this.salt = uuidv1();
//     this.password = await crypto
//       .createHmac('sha256', this.salt)
//       .update(this.password)
//       .digest('hex');
//   }

// if (this.password) {
//   this.password = await bcrypt.hash(this.password, 10);
// }

//   next();
// });

// userSchema.virtual('id').get(function (this: { _id: mongoose.ObjectId }) {
//   return String(this._id);
// });

export default mongoose.model('User', userSchema);
