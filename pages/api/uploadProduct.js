import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');

    const lastDoc = await db
      .collection('products')
      .find({})
      .sort({ productId: -1 })
      .limit(1)
      .toArray();
    const newId = lastDoc[0].productId + 1;
    const post = await db.collection('products').insertOne({
      ...req.body,
      productId: newId,
      price: parseInt(req.body.price),
    });

    res.json(newId);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
