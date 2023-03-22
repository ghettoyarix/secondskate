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
      minPrice,
      maxPrice,
      title,
      sortBy,
      sortDirection,
    } = req.query as { [key: string]: any };
    console.log(req.query.dateSorter);

    const limit = req.query.limit ? +req.query.limit : PAGE_LIMIT;
    const page = req.query.page ? +req.query.page : 1;
    const sortDir = req.query.sortDirection ? +req.query.sortDirection : 1;
    const titleProp = title ? { $regex: new RegExp('\\b' + title, 'i') } : null;

    const filterProps: { [key: string]: any } = {
      category,
      type,
      uploadedBy,
      condition,
      title: titleProp,
    };
    const sorterProps: { [key: string]: any } = {};
    if (sortBy === 'uploadDate') {
      sorterProps.uploadDate = sortDir;
    } else if (sortBy === 'price') {
      sorterProps.price = sortDir;
    }

    clearProps(filterProps);

    console.log(sorterProps);
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
      .sort({ ...sorterProps, _id: 1 })
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
