const mail = require('@sendgrid/mail')
import prisma from '../../lib/prisma'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

mail.setApiKey(process.env.SENDGRID_API_KEY)
const jwtSecret = process.env.JWT_SECRET

export default async (req, res) => {
  const { email } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    console.log('MAIL: user not found')
    return res.status(401).json({ error: 'User not found' })
  }

  //creating a random string and assigning it to result
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

  //calling the makeid function to create a random string that is 30 characters in length.
  const token = makeid(30)
  const urlToken = makeid(30)

  //Taking the randomly generated string and hashing it using the MD5 alogo from the CryptoJS package
  const hashedToken = String(CryptoJS.MD5(token))

  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: hashedToken,
    },
  })

  //Checking to see if the reset token that was added to the user matches with the current token.
  if (updatedUser.passwordResetToken === hashedToken) {
    const resetUrl = `http://localhost:3000/user-help/${updatedUser.email}/${urlToken}`
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      jwtSecret,
      {
        expiresIn: '10m',
      }
    )
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('PASSWORD_RESET_TOKEN', token, {
        httpOnly: true,
        maxAge: 10 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    )
    //sending an email with a link to the reset password page using the SendGrid API and the Password Reset Template
    mail
      .send({
        to: email,
        from: 'deverauxdesign@gmail.com',
        subject: 'Mindfully Full Password Reset',
        dynamicTemplateData: {
          url: resetUrl,
        },
        templateId: 'd-90decdeb9cbf48c98fb1db2e684bc425',
      })
      .then(res.status(200).json(email))
      .catch((error) => {
        console.log(error.message)
        res.status(401).json({ error: 'Error!' })
      })
  }
}
