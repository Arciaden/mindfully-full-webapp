import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      trainerID,
      clientID,
      clientName,
      appPlanTitle,
      appDuration,
      appPlanDesc,
      type,
    } = req.body

    const user = await prisma.user.findUnique({
      where: {
        id: trainerID,
      },
    })

    const client = await prisma.client.findUnique({
      where: {
        id: clientID,
      },
    })

    const appointment = await prisma.appointment.create({
      data: {
        userIDs: trainerID,
        appointmentPlanTitle: appPlanTitle.toLowerCase(),
        appointmentDuration: appDuration,
        appointmentPlanDescription: appPlanDesc.toLowerCase(),
        type: type.toLowerCase(),
        clientId: clientID,
        clientName: clientName.toLowerCase(),
      },
    })

    await prisma.user.update({
      where: {
        id: trainerID,
      },
      data: {
        appointments: {
          connect: {
            id: appointment.id,
          },
        },
      },
    })

    res.status(200).json({ user, client, appointment })
  }
}
