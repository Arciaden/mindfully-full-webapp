import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body

  const notes = await prisma.clientNotes
    .findMany({
      where: {
        noteId: id,
      },
    })
    .catch((error) => res.status(404).json({ error: error.message }))

  if (notes) {
    res.status(200).json(notes)
  }
}
