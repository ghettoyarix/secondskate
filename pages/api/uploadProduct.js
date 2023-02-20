import clientPromise from '../../lib/mongodb';

const uploadUproduct = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');

    const lastDoc = await db
      .collection('products')
      .find({})
      .sort({ productId: -1 })
      .limit(1)
      .toArray();
    console.log(lastDoc, 'last');
    let newId;
    if (!lastDoc.length) {
      newId = 1;
    } else {
      newId = lastDoc[0]?.productId + 1;
    }

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
export default uploadUproduct;
