import Product from '../../models/product';
import { query, Request, Response } from 'express';
import moment from 'moment';

const filterProduct = async (req: Request, res: Response) => {
  const {
    sortBy,
    maxPrice,
    minPrice,
    start,
    end,
    name,
    order = 'asc',
    minQuantity,
    maxQuantity,
  } = <
    {
      start: string;
      end: string;
      sortBy: string;
      maxPrice: string;
      minPrice: string;
      name: string;
      quantity: string;
      price: string;
      order: string;
      minQuantity: string;
      maxQuantity: string;
    }
  >req.query;

  const { page = '1', limit = '5' } = <{ page: string; limit: string }>(
    req.query
  );

  const startDate = moment(start).startOf('day');
  const endDate = moment(end).endOf('day');

  const filter: Record<any, any> = {};

  if (start && !end) {
    filter.createdAt = {
      $gte: startDate.toDate(),
    };
  }

  if (!start && end) {
    filter.createdAt = {
      $lte: endDate.toDate(),
    };
  }

  if (start && end) {
    filter.createdAt = {
      $gte: startDate.toDate(),
      $lte: endDate.toDate(),
    };
  }

  if (maxPrice && !minPrice) {
    filter.price = {
      $lte: maxPrice,
    };
  }

  if (!maxPrice && minPrice) {
    filter.price = {
      $gte: minPrice,
    };
  }

  if (maxPrice && minPrice) {
    filter.price = {
      $lte: maxPrice,
      $gte: minPrice,
    };
  }

  if (maxQuantity && !minQuantity) {
    filter.quantity = {
      $gte: maxQuantity,
    };
  }

  if (!maxQuantity && minQuantity) {
    filter.quantity = {
      $lte: minQuantity,
    };
  }

  if (maxQuantity && minQuantity) {
    filter.quantity = {
      $lte: maxQuantity,
      $gte: minQuantity,
    };
  }

  if (name) {
    filter.name = {
      $regex: new RegExp(name),
    };
  }

  const sort: Record<any, any> = {};

  if (sortBy) {
    sort[sortBy] = order;
  }

  console.log(sort);

  // let skip: number = 0;

  // if (page) {
  //   skip = (parseInt(page) - 1) * parseInt(limit);
  // }

  try {
    const response = await Product.find(filter)
      .sort(sort)
      .skip((parseInt(page) - 1) * parseInt(limit))
      // .skip(skip)
      .limit(parseInt(limit));
    // console.log(response);
    res.json({ response, currentPage: page });
  } catch (error) {
    return res.status(403).json({
      error: 'Failed to filter',
    });
  }
};

export default filterProduct;
