import { Box, Grid, GridItem, Heading, Input, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'
import Link from 'next/link'

const ClientDetailsAppointments = () => {
  const [appointmentData, setAppointmentData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  const router = useRouter()
  const { id } = router.query

  const getAppointments = async () => {
    setIsLoading(true)
    await axios
      .post(`${window.location.origin}/api/getClientAppointments/${id}`, {
        id,
      })
      .then((res) => {
        setAppointmentData(res.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAppointments()
  }, [id])

  const appointments = []

  appointmentData?.map((appointment) => {
    appointments.push(appointment)
  })
  //Search Function
  const getQueriedAppointments = (query, appointments) => {
    if (!query) {
      return appointments
    }

    return appointments.filter(
      (appointment) =>
        appointment.appointmentPlanTitle?.includes(query.toLowerCase()) ||
        appointment.appointmentNotes?.includes(query.toLowerCase()) ||
        appointment.type?.includes(query.toLowerCase())
    )
  }

  const queriedAppointments = getQueriedAppointments(query, appointments)

  //   //Filter Function
  //   const getFilteredAppointments = (category, appointments) => {
  //     if (!category) {
  //       return appointments
  //     }
  //     return appointments.filter((appointment) => {
  //       appointment.type.includes(category)
  //     })
  //   }
  //   console.log(category)
  //   const filteredAppointments = getFilteredAppointments(category, appointments)

  return (
    <>
      <Box mb="20px" w="100%">
        <Input
          type="search"
          placeholder="Find something..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      <Box className="appointment-container" overflow="scroll" h="500px">
        <Box _hover={{ cursor: 'pointer' }}>
          {appointmentData &&
            queriedAppointments.map((appointment) => (
              <Link href={`/userAppointments/${appointment.id}`}>
                <Box
                  boxShadow="0 0 5px #f1f0f0"
                  borderRadius="10px"
                  p="20px"
                  mb="15px"
                  transition="0.3s ease"
                  _hover={{
                    backgroundColor: '#f1f0f0',
                    transition: '0.3s ease',
                  }}
                  key={appointment.id}
                >
                  <Heading
                    as="h4"
                    mb="15px"
                    fontSize="text.md"
                    fontWeight={500}
                  >
                    {DateTime.fromISO(appointment.date).toLocaleString()}{' '}
                    Appointment Summary
                  </Heading>
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem>
                      <Heading as="h5" fontSize="text.sm" fontWeight={500}>
                        Category
                      </Heading>
                      <Text fontSize="text.sm">
                        {appointment?.type?.slice(0, 1).toUpperCase() +
                          appointment?.type?.slice(1)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Heading as="h5" fontSize="text.sm" fontWeight={500}>
                        Title
                      </Heading>
                      <Text fontSize="text.sm">
                        {appointment?.appointmentPlanTitle
                          ?.slice(0, 1)
                          .toUpperCase() +
                          appointment?.appointmentPlanTitle?.slice(1)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Heading as="h5" fontSize="text.sm" fontWeight={500}>
                        Duration
                      </Heading>
                      <Text fontSize="text.sm">
                        {appointment?.appointmentDuration >= 3601 ? (
                          <Text>
                            {Math.floor(
                              appointment?.appointmentDuration / 3600
                            )}{' '}
                            Hours
                          </Text>
                        ) : (
                          <Text>
                            {Math.floor(appointment?.appointmentDuration / 60)}{' '}
                            Minutes
                          </Text>
                        )}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Heading as="h5" fontSize="text.sm" fontWeight={500}>
                        Appointment Notes
                      </Heading>
                      {appointment.appointmentNotes ? (
                        <Text>
                          {appointment?.appointmentNotes
                            ?.slice(0, 1)
                            .toUpperCase() +
                            appointment?.appointmentNotes?.slice(1)}
                          ...
                        </Text>
                      ) : (
                        <Text>No Notes Yet</Text>
                      )}
                    </GridItem>
                  </Grid>
                </Box>
              </Link>
            ))}
        </Box>
      </Box>
    </>
  )
}

export default ClientDetailsAppointments
