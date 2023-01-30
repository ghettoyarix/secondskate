import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');
    const { limit, page, category, type, owner, condition } = req.query;
    const filterProps = {
      condition,
      owner,
    };

    Object.keys(filterProps).forEach((key) => {
      if (filterProps[key] === undefined) {
        delete filterProps[key];
      }
    });
    const products = await db
      .collection('products')
      .find({ ...filterProps })
      .limit(parseInt(limit))
      .toArray();

    res.json(products);
    console.log(filterProps);
  } catch (e) {
    console.error(e);
  }
};
