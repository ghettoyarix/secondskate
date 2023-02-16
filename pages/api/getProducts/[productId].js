import clientPromise from '../../../lib/mongodb';
const getProducts = async (req, res) => {
  const { productId } = req.query;

  try {
    const client = await clientPromise;

    const db = client.db('secondskate');

    const products = await db.collection('products').findOne({ productId: parseInt(productId) });

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};

export default getProducts;
