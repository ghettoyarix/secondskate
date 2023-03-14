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
      title,
      dateSorter,
    } = req.query as { [key: string]: any };
    console.log(req.query.dateSorter);

    const limit = req.query.limit ? +req.query.limit : PAGE_LIMIT;
    const page = req.query.page ? +req.query.page : 1;
    const titleProp = title ? { $regex: new RegExp('\\b' + title, 'i') } : null;

    const filterProps: { [key: string]: any } = {
      category,
      type,
      uploadedBy,
      condition,
      title: titleProp,
    };
    const sorterProps: { [key: string]: any } = {
      uploadDate: dateSorter,
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
