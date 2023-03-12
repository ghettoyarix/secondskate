import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from 'lib/mongodb';
import clearProps from 'helpers/clearProps';
import { PAGE_LIMIT } from 'constants/products';
const getProducts = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');
    const {
      category,
      type,
      uploadedBy,
      condition,
      priceSorter,
      minPrice,
      maxPrice,
      searchedValue,
    } = req.query as { [key: string]: any };
    const limit = req.query.limit ? +req.query.limit : PAGE_LIMIT;
    const page = req.query.page ? +req.query.page : 1;

    const filterProps: { [key: string]: any } = {
      category,
      type,
      uploadedBy,
      condition,
    };
    const sorterProps: { [key: string]: any } = {
      price: priceSorter,
      _id: 1,
    };

    clearProps(filterProps);
    clearProps(sorterProps);
    if (minPrice) {
      filterProps.price = { $gte: parseInt(minPrice) };
    }

    if (maxPrice) {
      if (filterProps.price) {
        filterProps.price.$lte = parseInt(maxPrice);
      } else {
        filterProps.price = { $lte: parseInt(maxPrice) };
      }
    }
    const skip = (page - 1) * limit;

    const products = await db
      .collection('products')
      .find({ ...filterProps, title: { $regex: new RegExp(searchedValue, 'i') } })
      .sort({ ...sorterProps })
      .skip(skip)
      .limit(limit)
      .toArray();
    const totalProducts = products.length;
    res.json({ products, totalProducts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

export default getProducts;
