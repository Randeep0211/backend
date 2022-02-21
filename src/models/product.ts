// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },

  quantity: {
    type: Number,
  },

  price: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32,
  },
});
module.exports = mongoose.model('Product', productSchema);
