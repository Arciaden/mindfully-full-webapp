import {
  Heading,
  Box,
  IconButton,
  Textarea,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { EditIcon, CloseIcon } from '@chakra-ui/icons'
import { DateTime } from 'luxon'
import { useState } from 'react'

const ClientNotes = ({ note, date, id }) => {
  const [edit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState(note)
  console.log(id)

  const handleSubmit = async () => {
    await axios
      .patch(`${window.location.origin}/api/clientNotesCRUD`, {
        id,
        note: editNote,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  const handleDelete = async () => {
    await axios
      .delete(`${window.location.origin}/api/clientNotesCRUD`, {
        data: {
          id,
        },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Box
        borderRadius="10px"
        boxShadow="0 0 5px #f1f0f0"
        mb="15px"
        padding="20px"
        position="relative"
      >
        <Flex justifyContent="space-between">
          <Heading as="h4" mb="15px" fontSize="text.md" fontWeight={500}>
            {DateTime.fromISO(date).toLocaleString()}
          </Heading>
          <Box>
            {edit ? (
              <IconButton
                aria-label="Search database"
                icon={<CloseIcon />}
                borderRadius="3px"
                size="xs"
                onClick={() => setEdit((state) => !state)}
              />
            ) : (
              <IconButton
                aria-label="Search database"
                icon={<EditIcon />}
                borderRadius="3px"
                size="xs"
                onClick={() => setEdit((state) => !state)}
              />
            )}
          </Box>
        </Flex>

        {edit ? (
          <form>
            <Textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
            />
            <Flex justifyContent="end" mt="20px">
              <Flex justifyContent="space-between" w="15%">
                <Button
                  backgroundColor="red"
                  color="white"
                  onClick={() => {
                    handleDelete()
                    setEdit(false)
                  }}
                >
                  Delete
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    handleSubmit()
                    setEdit(false)
                  }}
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </form>
        ) : (
          <Text>{note}</Text>
        )}
      </Box>
    </>
  )
}

export default ClientNotes
