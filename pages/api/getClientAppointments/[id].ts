import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body

  const appointments = await prisma.appointment
    .findMany({
      where: {
        clientId: id,
      },
    })
    .catch((error) => res.status(404).json({ error: error.message }))

  if (appointments) {
    res.status(200).json(appointments)
  }
}
