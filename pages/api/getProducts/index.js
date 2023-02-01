import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');
    const { limit, page, category, type, owner, condition, priceSorter } = req.query;
    const filterProps = {
      condition,
      category,
      ownedBy: owner,
    };
    const sorterProps = {
      price: priceSorter,
    };

    Object.keys(filterProps).forEach((key) => {
      if (filterProps[key] === undefined || filterProps[key] == 'any') {
        delete filterProps[key];
      }
    });
    Object.keys(sorterProps).forEach((key) => {
      if (sorterProps[key] === undefined) {
        delete sorterProps[key];
      }
    });
    const products = await db
      .collection('products')
      .find({ ...filterProps })
      .sort({ ...sorterProps })
      .limit(parseInt(limit))
      .toArray();

    res.json(products);
    console.log(sorterProps);
  } catch (e) {
    console.error(e);
  }
};
