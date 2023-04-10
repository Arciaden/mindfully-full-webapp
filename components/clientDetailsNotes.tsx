import { Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'

const ClientDetailsNotes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [notesData, setNotesData] = useState([])

  const router = useRouter()
  const { id } = router.query

  const getNotes = async () => {
    setIsLoading(true)
    await axios
      .post(`${window.location.origin}/api/clientNotesCRUD/${id}`, {
        id,
      })
      .then((res) => {
        setNotesData(res.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getNotes()
  }, [id])

  return (
    <Box>
      {notesData &&
        notesData.map((note) => (
          <>
            {DateTime.fromISO(note.createdAt).toLocaleString()}
            <Text>{note.note}</Text>
          </>
        ))}
    </Box>
  )
}

export default ClientDetailsNotes
