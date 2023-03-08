import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body

  if (req.method === 'GET') {
    const client = await prisma.client
      .findUnique({
        where: {
          id,
        },
      })
      .catch((error) => res.status(404).json({ error: error.message }))

    if (client) {
      res.status(200).json(client)
    }
  }
}
