import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'

const jwtSecret = process.env.JWT_SECRET

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.MINDFULLY_FULL_ACCESS_TOKEN

    console.log(token)
    if (token) {
      let user

      try {
        const { id } = jwt.verify(token, jwtSecret)
        user = await prisma.user.findUnique({
          where: { id },
        })
        if (!user) {
          throw new Error('User not found')
        }
      } catch (e) {
        res.status(401).json({ e: e.message })
        return
      }
      return handler(req, res, user)
    }
    res.status(401).json({ e: 'Not Authorized' })
  }
}
