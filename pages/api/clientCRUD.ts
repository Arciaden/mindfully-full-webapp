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
    imageUrl,
  } = req.body

  //Updating a client
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

    return res.status(200).json(client)
  }

  //Deleting a client
  if (req.method === 'DELETE') {
    const client = await prisma.client.delete({
      where: {
        id: id,
      },
    })

    return res.status(200).json(client)
  }

  //Creating a client and adding the relationship to the trainer (user)
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
        imageUrl,
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
    return res.status(200).json({ client, user })
  }

  if (req.method === 'POST' && id === req.query) {
    //Creating client notes
    const client = await prisma.client.findFirst({
      where: {
        id: id,
      },
    })

    if (!client) {
      return res.status(401).json({ error: 'nothing found' })
    }

    return res.status(200).json(client)
  }
}
