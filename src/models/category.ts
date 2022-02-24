const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    product:{
      type:'ObjectId',
      ref:"Product",
      maxlength:32
    }

  },
 
);

module.exports = mongoose.model('Category', categorySchema);
