import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, firstName, lastName, age, phone, email, bio } = req.body

  if (req.method === 'PATCH') {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        firstName,
        lastName,
        age,
        phone,
        email,
        about: bio,
      },
    })
    if (!user) {
      res.status(401).json({ error: 'Client not found' })
      console.log('Client Update Error: Client not found')
    }

    res.status(200).json(user)
  }
}
