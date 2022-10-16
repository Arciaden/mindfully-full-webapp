import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('MINDFULLY_FULL_ACCESS_TOKEN', {
      maxAge: 0,
    })
  )
}
