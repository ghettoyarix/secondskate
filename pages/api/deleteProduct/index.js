import clientPromise from '../../../lib/mongodb';
const deleteProduct = async (req, res) => {
  const { productId, authId } = req.query;

  try {
    const client = await clientPromise;

    const db = client.db('secondskate');

    const product = await db.collection('products').findOne({ productId: parseInt(productId) });
    const permitCondition = product.uploadedBy === authId; // MUST BE IMPROVED IN FUTURE!
    if (permitCondition) {
      const result = db.collection('products').deleteOne({ productId: parseInt(productId) });
      res.json(result);
    } else {
      res.json(false);
    }
  } catch (e) {
    console.error(e);
  }
};

export default deleteProduct;
