import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  const { productId } = req.query;
  const URL = req.body;

  try {
    const client = await clientPromise;
    console.log(client);
    const db = client.db('secondskate');

    const products = await db
      .collection('products')
      .updateOne({ productId: parseInt(productId) }, { $set: { photoURLs: URL } });

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
