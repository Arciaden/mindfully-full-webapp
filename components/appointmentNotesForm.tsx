import { Textarea, Text, Button, Box, Flex, Heading } from '@chakra-ui/react'
import { CloseIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const AppointmentNotesForm = ({ id, note }) => {
  const [edit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState(note)
  const [count, setCount] = useState(note.length)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit(false)

    const formData = {
      id,
      note: editNote,
    }
    fetch(`${window.location.origin}/api/appointment`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log('request processed successfully')

        return console.log(res.json())
      })
      .catch((error) => error)
  }

  const toggleEdit = () => {
    setEdit((state) => !state)
  }

  return (
    <>
      {edit ? (
        <>
          <Box w="95%">
            <form onSubmit={handleSubmit}>
              <Textarea
                maxLength={3000}
                rows={19}
                value={editNote}
                mb="10px"
                onChange={(e) => {
                  setEditNote(e.target.value)
                  setCount(e.target.value.length)
                }}
              ></Textarea>
              <Text>{count} / 3000</Text>
              <Flex w="100%" justifyContent="end">
                <Button type="submit" mt="10px">
                  Update Note
                </Button>
              </Flex>
            </form>
          </Box>
        </>
      ) : (
        <Text>{note}</Text>
      )}
      <Box
        position="absolute"
        top="0"
        right="2%"
        _hover={{ cursor: 'pointer' }}
        onClick={toggleEdit}
      >
        {edit ? <CloseIcon /> : <EditIcon />}
      </Box>
    </>
  )
}

export default AppointmentNotesForm
