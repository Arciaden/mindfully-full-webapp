import { Textarea, Text, Button, Box, Flex, Heading } from '@chakra-ui/react'
import { CloseIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const CreateAppointmentNotes = ({ id }) => {
  const [note, setNote] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id,
      note,
    }
    fetch(`${window.location.origin}/api/appointment`, {
      method: 'PUT',
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

  return (
    <>
      <>
        <Box w="95%">
          <form onSubmit={handleSubmit}>
            <Textarea
              maxLength={3000}
              rows={19}
              mb="10px"
              onChange={(e) => {
                setNote(e.target.value)
                setCount(e.target.value.length)
              }}
            ></Textarea>
            <Text>{count} / 3000</Text>
            <Flex w="100%" justifyContent="end">
              <Button type="submit" mt="10px">
                Create Note
              </Button>
            </Flex>
          </form>
        </Box>
      </>
    </>
  )
}

export default CreateAppointmentNotes
