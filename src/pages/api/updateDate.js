import clientPromise from '../../lib/mongodb';

const uploadUproduct = async (req, res) => {
  const { prod } = req.query;
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');

    const x = await db.collection('products').updateOne(
      { productId: +prod },
      {
        $currentDate: {
          uploadDate: true,
        },
      },
    );
    res.json(prod);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
export default uploadUproduct;
