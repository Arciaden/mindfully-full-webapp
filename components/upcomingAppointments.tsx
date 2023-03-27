import { Box, Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react'
import { useProfile } from '../lib/hooks'
import { DateTime } from 'luxon'
import Link from 'next/link'
import appointment from '../pages/api/appointment'

const UpcomingAppointments = () => {
  const { user, isLoading } = useProfile()

  let date = DateTime.fromISO('2023-03-21T23:00:40.305Z')
  console.log(date)

  return (
    <Box>
      <Grid
        columnGap={2}
        gridTemplateColumns="repeat(5, 1fr)"
        backgroundColor="#fff"
      >
        {user &&
          user?.appointments
            .slice(0, 5)
            .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
            .map((appointment) => (
              <GridItem
                key={appointment.id}
                border="1px solid #f0f0f0"
                boxShadow="0 2px 5px #f0f0f0"
                borderRadius="10px"
                p="20px"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                  fontSize="text.sm"
                  lineHeight="35px"
                >
                  <Heading
                    as="h4"
                    mb="10px"
                    fontSize="text.md"
                    fontWeight="500"
                  >
                    {DateTime.fromISO(appointment.createdAt).toLocaleString()}
                  </Heading>

                  <Text>
                    {appointment.clientName} -{' '}
                    {`${DateTime.fromISO(appointment.time).hour}:${
                      DateTime.fromISO(appointment.time).minute
                    } PM`}
                  </Text>
                  <Text></Text>
                  <Text>{appointment.appointmentPlanTitle}</Text>
                  {appointment.appointmentDuration >= 3601 ? (
                    <Text>
                      {Math.floor(appointment.appointmentDuration / 3600)} Hours
                    </Text>
                  ) : (
                    <Text>
                      {Math.floor(appointment.appointmentDuration / 60)} Minutes
                    </Text>
                  )}
                  <Link href={`/userAppointments/${appointment.id}`}>
                    <Text _hover={{ cursor: 'pointer' }}>View Appointment</Text>
                  </Link>
                </Flex>
              </GridItem>
            ))}
      </Grid>
    </Box>
  )
}

export default UpcomingAppointments
