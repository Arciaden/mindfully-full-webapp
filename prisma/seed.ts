import { PrismaClient } from '@prisma/client'
import { userData } from './userData'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const run = async () => {
  await prisma.user.deleteMany()
  await prisma.appointment.deleteMany()
  await prisma.client.deleteMany()
  const salt = bcrypt.genSaltSync()

  await Promise.all(
    userData.map((user) => {
      return prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          permissions: user.permissions,
          type: user.type,
          password: bcrypt.hashSync(user.password, salt),
          email: user.email,
          // profile: {
          firstName: user.firstName.toLowerCase(),
          lastName: user.lastName.toLowerCase(),
          age: user.age,
          phone: user.phone,
          about: user.about.toLowerCase(),
          // },
          clients: {
            create: user.clients.map((client) => ({
              name: client.name,
              firstName: client.firstName.toLowerCase(),
              lastName: client.lastName.toLowerCase(),
              fullName:
                client.firstName.toLowerCase() +
                ' ' +
                client.lastName.toLowerCase(),
              age: client.age,
              phone: client.phone,
              email: client.email,
              about: client.about,
            })),
          },
          appointments: {
            create: user.appointments.map((appointment) => ({
              type: appointment.type.toLowerCase(),
              date: appointment.date,
              appointmentDuration: appointment.appointmentDuration,
              appointmentPlanDescription:
                appointment.appointmentPlanDescription.toLowerCase(),
              appointmentPlanTitle:
                appointment.appointmentPlanTitle.toLowerCase(),
              appointmentNotes: appointment.appointmentNotes.toLowerCase(),
              userIDs: appointment.userIDs,
              clientId: appointment.clientId,
            })),
          },
        },
        include: {
          clients: true,
          appointments: true,
        },
      })
    })
  )
}

run()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
