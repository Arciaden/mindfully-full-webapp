import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'

//grabbing jwt from the env variable
const jwtSecret = process.env.JWT_SECRET

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    //assigning the access cookie to the token variable
    const token = req.cookies.MINDFULLY_FULL_ACCESS_TOKEN

    //checking if we have the token. If we do, declare a user variable and then inside of a try catch statement
    //find the user's email within the database and include the client and appointsments on the response object.
    if (token) {
      let user

      try {
        const { id } = jwt.verify(token, jwtSecret)
        user = await prisma.user.findUnique({
          where: { id },
          include: {
            clients: true,
            appointments: true,
          },
        })

        if (!user) {
          throw new Error('User not found')
        }
      } catch (e) {
        res.setHeader(
          'Set-Cookie',
          await cookie.serialize('MINDFULLY_FULL_ACCESS_TOKEN', null, {
            httpOnly: true,
            maxAge: -1,
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
          })
        )
        console.log('CATCH unauthourized user')
        res.status(401).json({ e: e.message })
        return
      }

      return handler(req, res, user)
    }
    res.status(401).json({ e: 'Not Authorized' })
  }
}
