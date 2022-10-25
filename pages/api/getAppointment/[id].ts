import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body

  const appointment = await prisma.appointment
    .findUnique({
      where: {
        id,
      },
    })
    .catch((error) => res.status(404).json({ error: error.message }))

  if (appointment) {
    res.status(200).json(appointment)
  }
}
