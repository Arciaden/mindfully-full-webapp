const mail = require('@sendgrid/mail')
import prisma from '../../lib/prisma'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { email } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  console.log(user)

  if (!user) {
    res.status(401).json({ error: 'User does not exist' })
  }

  //   const resetUrl = `http://localhost:3000/resetpassword/${token}`

  mail
    .send({
      to: email,
      from: 'deverauxdesign@gmail.com',
      subject: 'Mindfully Full Password Reset',
      text: forgotPasswordMessage,
    })
    .then(res.status(200).json(email))
    .catch((e) => e.message)
}
