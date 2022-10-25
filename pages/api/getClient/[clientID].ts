import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body

  const client = await prisma.client.findUnique({
    where: {
      id,
    },
  })

  console.log(client)
  res.status(200).json(client)
}
