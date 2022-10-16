const mail = require('@sendgrid/mail')
import bcrypt from 'bcrypt'
import prisma from '../../lib/prisma'
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { password, email } = req.body

  const salt = bcrypt.genSaltSync()

  console.log(email)
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: bcrypt.hashSync(password, salt),
    },
  })

  if (!user) {
    res.status(401).json((e) => e.message)
  }
  mail
    .send({
      to: email,
      from: 'deverauxdesign@gmail.com',
      subject: 'Mindfully Full Password Confirmation',
      html: `<h1>Mindfully Full Password Reset</h1>\n<h2>Dear, ${user.firstName} ${user.lastName}</h2>\n
      <p>Your password has been successfully updated!\n</p>
      `,
    })
    .then(res.status(200).json(email))
    .catch((e) => e.message)
}
