import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    id,
    firstName,
    lastName,
    age,
    phone,
    email,
    about,
    trainerID,
    fullName,
  } = req.body
  if (req.method === 'PATCH') {
    const client = await prisma.client.update({
      where: {
        id: id,
      },
      data: {
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        age,
        phone,
        email: email.toLowerCase(),
        about,
        fullName: firstName.toLowerCase() + ' ' + lastName.toLowerCase(),
      },
    })

    if (!client) {
      res.status(401).json({ error: 'Client not found' })
      console.log('Client Update Error: Client not found')
    }

    res.status(200).json(client)
  }
  if (req.method === 'DELETE') {
    const client = await prisma.client.delete({
      where: {
        id: id,
      },
    })

    return res.status(200).json(client)
  }

  if (req.method === 'POST') {
    const client = await prisma.client.create({
      data: {
        firstName,
        lastName,
        age,
        phone,
        email,
        about,
        fullName,
      },
    })

    const user = await prisma.user.update({
      where: {
        id: trainerID,
      },
      data: {
        clients: {
          connect: {
            id: client.id,
          },
        },
      },
    })

    console.log(client)
    res.status(200).json({ client, user })
  }
}
