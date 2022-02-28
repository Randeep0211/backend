import Product from '../../models/product';
import { query, Request, Response } from 'express';
import moment from 'moment';

const filterProduct = async (req: Request, res: Response) => {
  const { sortBy, maxPrice, minPrice, start, end, name, quantity } = <
    {
      start: string;
      end: string;
      sortBy: string;
      maxPrice: string;
      minPrice: string;
      name: string;
      quantity: string;
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

  if (name) {
    filter.name = {
      $regex: new RegExp(name),
    };
  }

  if (sortBy) {
    filter.sort = { qty: { quantity: -1 } };
  }

  try {
    const query = Product.find(filter);
    // if condition query.sort();

    // query.sort();
    // query.limit();

    // const response = await query;
    let quantity = 1;

    const response = await Product.find(filter)
      .sort({ sortBy: quantity })
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));

    res.json({ response, currentPage: page });
  } catch (error) {
    return res.status(403).json({
      error: 'Failed to filter',
    });
  }
};

export default filterProduct;
