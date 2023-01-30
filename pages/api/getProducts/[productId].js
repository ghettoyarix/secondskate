import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  const { productId } = req.query;

  try {
    const client = await clientPromise;

    const db = client.db('secondskate');

    const products = await db
      .collection('products')
      .find({ productId: parseInt(productId) })
      .toArray();

    res.json(products[0]);
  } catch (e) {
    console.error(e);
  }
};
