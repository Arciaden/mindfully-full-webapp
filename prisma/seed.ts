import { PrismaClient } from '@prisma/client'
import { userData } from './userData'

const prisma = new PrismaClient()

const run = async () => {
  await prisma.user.deleteMany()
  await prisma.appointment.deleteMany()
  await prisma.client.deleteMany()

  await Promise.all(
    userData.map((user) => {
      return prisma.user.upsert({
        where: { name: user.name },
        update: {},
        create: {
          name: user.name,
          permissions: user.permissions,
          type: user.type,
          profile: {
            username: user.profile.username,
            password: user.profile.password,
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            age: user.profile.age,
            phone: user.profile.phone,
            email: user.profile.email,
            about: user.profile.about,
          },
          clients: {
            create: user.clients.map((client) => ({
              name: client.name,
              firstName: client.firstName,
              lastName: client.lastName,
              age: client.age,
              phone: client.phone,
              email: client.email,
              about: client.about,
            })),
          },
          appointments: {
            create: user.appointments.map((appointment) => ({
              type: appointment.type,
              date: appointment.date,
              appointmentDuration: appointment.appointmentDuration,
              appointmentPlanDescription:
                appointment.appointmentPlanDescription,
              appointmentPlanTitle: appointment.appointmentPlanTitle,
            })),
          },
        },
      })
    })
  )
}

// const run = async () => {
//   await Promise.all(
//     userData.map(async (user) => {
//       return prisma.user.upsert({
//         where: { name: user.name },
//         update: {},
//         create: {
//           name: user.name,
//           permissions: user.permissions,
//           type: user.type,
//           profile: {
//             username: user.profile.username,
//             password: user.profile.password,
//             firstName: user.profile.firstName,
//             lastName: user.profile.lastName,
//             age: user.profile.age,
//             phone: user.profile.phone,
//             email: user.profile.email,
//             about: user.profile.about,
//           },
//             clients: {
//               create: user.clients.map((client) => ({
//                 firstName: client.firstName,
//                 lastName: client.lastName,
//                 phone: client.phone,
//                 email: client.email,
//                 about: client.about,
//                 age: client.age,
//               })),
//             },
//           appointments: {
//             create: user.appointments.map((appointment) => ({
//               type: appointment.type,
//               date: appointment.date,
//               workoutPlan: {
//                 title: appointment.workoutPlan.title,
//                 description: appointment.workoutPlan.description,
//                 duration: appointment.workoutPlan.duration,
//               },
//               appointmentNotes: {
//                 title: appointment.appointmentNotes.title,
//                 description: appointment.appointmentNotes.description,
//               },
//             })),
//           },
//         },
//       })
//     })
//   )
// }

run()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
