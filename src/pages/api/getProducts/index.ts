import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from 'lib/mongodb';
import clearProps from 'helpers/clearProps';

const getProducts = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');
    const { category, type, uploadedBy, condition, priceSorter } = req.query;
    const limit = req.query.limit ? +req.query.limit : 8;
    const page = req.query.page ? +req.query.page : 1;

    const filterProps: { [key: string]: any } = {
      category,
      type,
      uploadedBy,
      condition,
    };
    const sorterProps: { [key: string]: any } = {
      price: priceSorter,
    };

    clearProps(filterProps);
    clearProps(sorterProps);

    const skip = (page - 1) * limit;
    const totalProducts = await db.collection('products').count(filterProps);

    const products = await db
      .collection('products')
      .find({ ...filterProps })
      .sort({ ...sorterProps })
      .skip(skip)
      .limit(limit)
      .toArray();

    res.json({ products, totalProducts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

export default getProducts;
