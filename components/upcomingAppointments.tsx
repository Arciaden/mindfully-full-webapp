import { Box, Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react'
import { useProfile } from '../lib/hooks'
import { DateTime } from 'luxon'
import Link from 'next/link'

const UpcomingAppointments = () => {
  const { user, isLoading } = useProfile()

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
            .sort((a, b) => (a.date > b.date ? 1 : -1))
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
                    {DateTime.fromISO(appointment.date).toLocaleString()}
                  </Heading>
                  <Text>
                    {appointment.clientName.toUpperCase()}{' '}
                    {appointment.time > 1200
                      ? String(appointment.time - 1200).replace(
                          /(.{2})$/,
                          ':$1'
                        )
                      : String(appointment.time).replace(/(.{2})$/, ':$1')}
                    {appointment.time > 1200 ? ' PM' : ' AM'}
                  </Text>
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
