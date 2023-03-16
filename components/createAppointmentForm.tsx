import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useProfile } from '../lib/hooks'

const CreateAppointmentForm = () => {
  const { user } = useProfile()
  const [trainer, setTrainer] = useState('')
  const [client, setClient] = useState('')
  const [appDesc, setAppDesc] = useState('')
  const [appTitle, setAppTitle] = useState('')
  const [appDuration, setAppDuration] = useState(0)
  const [type, setType] = useState('')
  const [clientName, setClientName] = useState('')

  console.log(client + '\n' + clientName)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      trainerID: trainer,
      clientID: client,
      clientName,
      appPlanTitle: appTitle,
      appPlanDesc: appDesc,
      appDuration,
      type,
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
      <h1>Add Appointment</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Appointment Title</FormLabel>
          <Input type="text" onChange={(e) => setAppTitle(e.target.value)} />
          <FormLabel>Trainer</FormLabel>
          <Select
            placeholder="Select option"
            onChange={(e) => setTrainer(e.target.value)}
          >
            <option value={user?.id}>Ian Borman</option>
          </Select>
          <Select
            onChange={(e) => {
              setClient(e.target.value.split(',')[0])
              setClientName(
                e.target.value.split(',')[1] +
                  ' ' +
                  e.target.value.split(',')[2]
              )
            }}
          >
            {user?.clients.map((client) => (
              <option
                key={client.id}
                value={[client.id, client.firstName, client.lastName]}
              >
                {client.firstName} {client.lastName}
              </option>
            ))}
          </Select>
          <FormLabel>Appointment Description</FormLabel>
          <Textarea onChange={(e) => setAppDesc(e.target.value)}></Textarea>
          <FormLabel>{'Appointment Duration (in minutes)'}</FormLabel>
          <Input
            type="number"
            onChange={(e) => setAppDuration(Number(e.target.value))}
          />
          <FormLabel>Appointment Type</FormLabel>
          <Input type="text" onChange={(e) => setType(e.target.value)} />
          <Button type="submit">Create Appointment</Button>
        </FormControl>
      </form>
    </Box>
  )
}

export default CreateAppointmentForm
