import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useProfile } from '../lib/hooks'
import durationObject from '../lib/durationObject'

const CreateAppointmentSidebar = () => {
  const { user } = useProfile()
  const [client, setClient] = useState('')
  const [appDesc, setAppDesc] = useState('')
  const [appTitle, setAppTitle] = useState('')
  const [appDuration, setAppDuration] = useState(0)
  const [type, setType] = useState('')
  const [clientName, setClientName] = useState('')
  const [time, setTime] = useState(0)
  const [date, setDate] = useState(Date())

  let newDate = new Date(date)
  newDate.setHours(newDate.getHours() + 6)
  let isoDate = newDate.toISOString()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      trainerID: user?.id,
      clientID: client,
      clientName,
      appPlanTitle: appTitle,
      appPlanDesc: appDesc,
      appDuration,
      type,
      date: isoDate,
      time,
    }
    fetch(`${window.location.origin}/api/appointment`, {
      method: 'POST',
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
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel mt="10px">Title</FormLabel>
          <Input type="text" onChange={(e) => setAppTitle(e.target.value)} />
          {/* <FormLabel>Trainer</FormLabel>
            <Select
              placeholder="Select Trainer"
              onChange={(e) => setTrainer(e.target.value)}
            >
              <option value={user?.id}>
                {user?.firstName.slice(0, 1).toUpperCase() +
                  user?.firstName.slice(1) +
                  ' ' +
                  user?.lastName.slice(0, 1).toUpperCase() +
                  user?.lastName.slice(1)}
              </option>
            </Select> */}
          <FormLabel mt="10px">Client</FormLabel>
          <Select
            placeholder="Select Client"
            onChange={(e) => {
              setClient(e.target.value.slice(0, 24))
              setClientName(e.target.value.slice(24))
            }}
          >
            {user &&
              user?.clients?.map((client) => (
                <option
                  key={client.id}
                  value={client.id + ' ' + client.fullName}
                >
                  {client.firstName.substring(0, 1).toUpperCase() +
                    client.firstName.substring(1) +
                    ' ' +
                    client.lastName.substring(0, 1).toUpperCase() +
                    client.lastName.substring(1)}
                </option>
              ))}
          </Select>
          <FormLabel mt="10px">Category</FormLabel>
          <Input type="text" onChange={(e) => setType(e.target.value)} />
          <FormLabel mt="10px">Description</FormLabel>
          <Textarea onChange={(e) => setAppDesc(e.target.value)}></Textarea>
          <FormLabel mt="10px">Date</FormLabel>
          <Input type="date" onChange={(e) => setDate(e.target.value)} />
          <FormLabel mt="10px">Time</FormLabel>
          <Input
            onChange={(e) => setTime(Number(e.target.value.replace(':', '')))}
            type="time"
          />
          <FormLabel mt="5px">Duration</FormLabel>
          <Select
            placeholder="Select Appointment Duration"
            onChange={(e) => setAppDuration(Number(e.target.value))}
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

          <Flex justifyContent="center">
            <Button type="submit" mt="20px" w="100%">
              Create Appointment
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  )
}

export default CreateAppointmentSidebar
