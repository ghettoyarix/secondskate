import clientPromise from '../../../lib/mongodb';

const addURL = async (req, res) => {
  const { productId } = req.query;
  const URL = req.body;

  try {
    const client = await clientPromise;

    const db = client.db('secondskate');

    const products = await db
      .collection('products')
      .updateOne({ productId: parseInt(productId) }, { $set: { photoURLs: URL } });

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
export default addURL;
