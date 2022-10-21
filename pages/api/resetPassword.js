const mail = require('@sendgrid/mail')
import bcrypt from 'bcrypt'
import prisma from '../../lib/prisma'
import cookie from 'cookie'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { password, email } = req.body
  const token = req.cookies.PASSWORD_RESET_TOKEN

  if (!token) {
    console.log('RESET PASSWORD: reset token invalid')
    res.status(401).json({ error: 'Reset Token Invalid' })
    return
  }
  //generateing a salt and updating the field in the database with a new
  //and encrypted password
  const isUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!isUser) {
    console.log('RESET PASSWORD: User not found')
    res.status(401).json({ error: 'Unauthourized' })
    return
  }

  const salt = bcrypt.genSaltSync()
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: bcrypt.hashSync(password, salt),
    },
  })

  if (!user) {
    console.log('RESET PASSWORD: User not found')
    res.status(401).json({ error: 'User not found' })
    return
  }

  res.setHeader(
    'Set-Cookie',
    await cookie.serialize('PASSWORD_RESET_TOKEN', null, {
      httpOnly: true,
      maxAge: -1,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  mail
    .send({
      to: email,
      from: 'deverauxdesign@gmail.com',
      subject: 'Mindfully Full Password Confirmation',
      templateId: 'd-d6f22d2a3a15423295d80fa1bfc714a2',
      dynamicTemplateData: {
        url: 'http://localhost:3000/signin',
      },
    })
    .then(res.status(200).json(email))
    .catch((e) => e.message)

  //sending a confirmation email to the users email using the Password Confirmation Template from SendGrid
}
