import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, firstName, lastName, age, phone, email, about } = req.body
  if (req.method === 'PATCH') {
    const user = await prisma.client.update({
      where: {
        id: id,
      },
      data: {
        firstName,
        lastName,
        age,
        phone,
        email,
        about,
      },
    })

    if (!user) {
      res.status(401).json({ error: 'User not found' })
      console.log('Client Update Error: User not found')
    }

    res.status(200).json(user)
  }
  if (req.method === 'DELETE') {
  }
}
