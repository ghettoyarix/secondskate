import clientPromise from '../../../lib/mongodb';

const getProducts = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('secondskate');
    const { limit, page, category, type, owner, condition, priceSorter } = req.query;
    const filterProps = {
      category,
      type,
    };
    const sorterProps = {
      price: priceSorter,
    };

    Object.keys(filterProps).forEach((key) => {
      if (
        filterProps[key] == 'undefined' ||
        filterProps[key] === undefined ||
        filterProps[key] == 'any' ||
        filterProps[key] === null
      ) {
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
    console.log(filterProps);
    console.log(category);

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
export default getProducts;
