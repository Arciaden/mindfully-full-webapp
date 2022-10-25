import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const AppointmentPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [appointment, setAppointment] = useState()

  //Replace this with the useAppointment Hook once I figure out how to
  //This will give us caching etc.
  const getAppointment = async () => {
    await axios
      .post(`${window.location.origin}/api/getAppointment/${id}`, {
        id: id,
      })
      .then((res) => setAppointment(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    id ? getAppointment() : null
  }, [id])

  return (
    <Box>
      <Heading>
        {/* I'm not sure why there is an error here but since I will be refactoring the way that we are fetching data for this page
        just ignore the error for now as the data is fetching properly. I'm just doing this so that I know the API endpoint is doing what we need
        and so we have data to build the UI for the page. */}
        {appointment?.type} {appointment?.appointmentPlanTitle}
      </Heading>
      <Text>{appointment?.appointmentPlanDescription}</Text>
      <Text>{appointment?.appointmentDuration}</Text>
      <Text>{appointment?.appointmentNotes}</Text>
      <Text>{appointment?.date}</Text>
    </Box>
  )
}

export default AppointmentPage
