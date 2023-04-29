import {
  Box,
  Text,
  Heading,
  Input,
  IconButton,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AddIcon } from '@chakra-ui/icons'
import ClientNotes from './clientNotes'

const ClientDetailsNotes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [notesData, setNotesData] = useState([])
  const [note, setNote] = useState('')
  const [count, setCount] = useState(0)
  const [addNote, setAddNote] = useState(false)
  const [query, setQuery] = useState('')

  const router = useRouter()
  const { id } = router.query

  //Getting the notes for the client
  const getNotes = async () => {
    setIsLoading(true)
    await axios
      .post(`${window.location.origin}/api/getClientNotes/${id}`, {
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

  //Adding a note to the db
  const handleSubmit = async () => {
    setIsLoading(true)
    await axios
      .post(`${window.location.origin}/api/clientNotesCRUD`, {
        id,
        note,
      })
      .then((res) => {
        setIsLoading(false)
        console.log('note successfully added!', res.data)
      })
      .catch((error) => console.log(error))
  }

  //Searching the notes function, could probably pull this search bar out into its own component and then just pass the parameters in. Might try and figure that out eventually

  const notes = []

  notesData?.map((note) => {
    notes.push(note)
  })
  //Search Function
  const getQueriedNotes = (query, notes) => {
    if (!query) {
      return notes
    }

    return notes.filter((note) => note.note?.includes(query.toLowerCase()))
  }

  const queriedNotes = getQueriedNotes(query, notes)

  //Updating the count for how many characters are in the text box when filling out a new note.
  useEffect(() => {
    setCount(note.length)
  })

  return (
    <Box>
      <Box mb="20px" w="100%">
        {addNote ? (
          <FormControl>
            <FormLabel>Add a Note</FormLabel>
            <Textarea
              maxLength={3000}
              rows={20}
              value={note}
              mb="10px"
              onChange={(e) => {
                setNote(e.target.value)
                setCount(e.target.value.length)
              }}
            ></Textarea>
            <Flex justifyContent="space-between">
              <Text>{count} / 3000</Text>
              <Box>
                <Button
                  mr="10px"
                  onClick={() => {
                    setNote('')
                    setAddNote(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    handleSubmit()
                    setAddNote(false)
                  }}
                >
                  Save
                </Button>
              </Box>
            </Flex>
          </FormControl>
        ) : (
          <>
            <Flex>
              <Input
                type="search"
                placeholder="Find something..."
                onChange={(e) => setQuery(e.target.value)}
                m="0px 20px 20px 0"
              />
              <IconButton
                aria-label="Search database"
                icon={<AddIcon />}
                borderRadius="50px"
                onClick={() => setAddNote(true)}
              />
            </Flex>
            <Box h="500px" overflow="scroll" p="20px">
              {notesData &&
                queriedNotes
                  .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
                  .map((note) => (
                    <ClientNotes
                      note={note.note}
                      date={note.createdAt}
                      id={note.id}
                    />
                  ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default ClientDetailsNotes
