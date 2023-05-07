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
      time,
      date,
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
        date,
        clientName: clientName.toLowerCase(),
        time,
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

  if (req.method === 'PATCH') {
    const { id, title, type, duration, description, note } = req.body

    const appointment = await prisma.appointment.findUnique({
      where: {
        id,
      },
    })

    if (!appointment) {
      res.status(401).json({ error: 'Appointment not found' })
      console.log('Appointment Update Error: Appointment not found')
    }

    await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        appointmentPlanTitle: title?.toLowerCase(),
        appointmentDuration: duration,
        appointmentPlanDescription: description?.toLowerCase(),
        type: type?.toLowerCase(),
        appointmentNotes: note?.toLowerCase(),
      },
    })

    res.status(200).json({ appointment })
  }

  if (req.method === 'PUT') {
    const { id, note } = req.body
    const appointment = await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        appointmentNotes: note.toLowerCase(),
      },
    })
    return res.status(200).json(appointment)
  }

  if (req.method === 'DELETE') {
    const { id } = req.body

    const appointment = await prisma.appointment.findUnique({
      where: {
        id,
      },
    })

    if (!appointment) {
      res.status(404).json({ error: 'Appointment Not Found' })
    }

    await prisma.appointment.delete({
      where: {
        id,
      },
    })

    return res.status(200).json(appointment)
  }
}
