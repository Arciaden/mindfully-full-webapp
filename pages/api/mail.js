const mail = require('@sendgrid/mail')
import prisma from '../../lib/prisma'
import CryptoJS from 'crypto-js'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { email } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    res.status(401).json({ error: 'User does not exist' })
  }

  function makeid(length) {
    var result = ''
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const token = makeid(30)
  const hashedToken = String(CryptoJS.MD5(token))

  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: hashedToken,
    },
  })

  if (updatedUser.passwordResetToken === hashedToken) {
    const resetUrl = `http://localhost:3000/user-help/${updatedUser.email}/${token}`

    mail
      .send({
        to: email,
        from: 'deverauxdesign@gmail.com',
        subject: 'Mindfully Full Password Reset',
        html: `<h1>Mindfully Full Password Reset</h1>\n<h2>Dear, ${updatedUser.firstName} ${updatedUser.lastName}</h2>\n 
        <p>We have recieved a password reset request for your account.\n 
        If you made this request please click <a href="${resetUrl}">here</a></p>\n
        <p>If you have not requested this change please and are concearned about the scruity
         of your account please contact us.</p>\n`,
      })
      .then(res.status(200).json(email))
      .catch((e) => e.message)
  }
}
