// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import { Schema, model, Document, Types } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
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

    availability: {
      type: String,
    },

    category: {
      type: 'ObjectId',
      ref: 'Category',
      maxlength: 32,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Product', productSchema);
