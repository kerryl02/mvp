import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { listingId, userId, startDate, endDate } = req.body;

    const response = await fetch('http://localhost:5000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ listingId, userId, startDate, endDate }),
    });

    if (response.ok) {
      const data = await response.json();
      res.status(201).json(data);
    } else {
      const error = await response.json();
      res.status(400).json(error);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

