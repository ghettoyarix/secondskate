// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
type Data = {
  gay: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { limit, page, category, type } = req.query;

  res.status(200).json(req.query);
}
