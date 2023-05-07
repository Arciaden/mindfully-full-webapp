import {
  Flex,
  Heading,
  Text,
  Input,
  Select,
  FormLabel,
  Textarea,
  Button,
  Box,
} from '@chakra-ui/react'
import { CloseIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import durationObject from '../lib/durationObject'

const AppointmentInfoForm = ({ title, type, duration, description, id }) => {
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [editType, setEditType] = useState(type)
  const [editDuration, setEditDuration] = useState(duration)
  const [editDescription, setEditDescription] = useState(description)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id,
      title: editTitle,
      type: editType,
      duration: editDuration,
      description: editDescription,
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
      <Box
        position="absolute"
        top="0"
        right="2%"
        _hover={{ cursor: 'pointer' }}
        onClick={toggleEdit}
      >
        {edit ? <CloseIcon /> : <EditIcon />}
      </Box>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <Flex justifyContent="space-between" mb="20px">
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                pb="5px"
                mb="10px"
                w="75%"
              >
                Title
              </Heading>
              <Input
                fontSize="text.md"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Flex>
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                pb="5px"
                mb="10px"
                w="75%"
              >
                Type
              </Heading>
              <Input
                fontSize="text.md"
                value={editType}
                onChange={(e) => setEditType(e.target.value)}
              />
            </Flex>
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                pb="5px"
                mb="10px"
                w="75%"
              >
                Duration
              </Heading>

              <Select
                placeholder="Select Appointment Duration"
                value={editDuration}
                onChange={(e) => setEditDuration(Number(e.target.value))}
              >
                {durationObject.map((duration) => (
                  <option key={duration.seconds} value={duration.seconds}>
                    {duration.hour != '0'
                      ? duration.hour +
                        ' ' +
                        'hours' +
                        ' ' +
                        duration.minutes +
                        ' ' +
                        'minutes'
                      : duration.minutes + ' ' + 'minutes'}
                  </option>
                ))}
              </Select>
            </Flex>
          </Flex>
          <Flex flexDirection="column" mb="15px">
            <Heading
              as="h3"
              fontSize="text.xl"
              fontWeight="normal"
              w="75%"
              pb="5px"
              mb="10px"
            >
              Description
            </Heading>
            <Textarea
              rows={12}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </Flex>
          <Flex justifyContent="right">
            <Button type="submit" onClick={toggleEdit}>
              Update Appointment
            </Button>
          </Flex>
        </form>
      ) : (
        <>
          <Flex justifyContent="space-between" mb="20px">
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                borderBottom="1px solid #e6e6e6"
                pb="5px"
                w="75%"
              >
                Title
              </Heading>
              <Text pt="5px" pl="5px" fontSize="text.md">
                {title}
              </Text>
            </Flex>
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                borderBottom="1px solid #e6e6e6"
                pb="5px"
                w="75%"
              >
                Type
              </Heading>
              <Text pt="5px" pl="5px" fontSize="text.md">
                {type}
              </Text>
            </Flex>
            <Flex flexDirection="column" w="32%">
              <Heading
                as="h3"
                fontSize="text.xl"
                fontWeight="normal"
                borderBottom="1px solid #e6e6e6"
                pb="5px"
                w="75%"
              >
                Duration
              </Heading>
              {duration >= 3601 ? (
                <Text pt="5px" ml="5px" fontSize="text.md">
                  {Math.floor(duration / 3600)} Hours
                </Text>
              ) : (
                <Text pt="5px" pl="5px" fontSize="text.md">
                  {Math.floor(duration / 60)} Minutes
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Heading
              as="h3"
              fontSize="text.xl"
              fontWeight="normal"
              borderBottom="1px solid #e6e6e6"
              w="75%"
              pb="5px"
            >
              Description
            </Heading>
            <Text pt="5px" pl="5px" fontSize="text.md">
              {description}
            </Text>
          </Flex>
        </>
      )}
    </>
  )
}

export default AppointmentInfoForm
