import {
  Flex,
  CircularProgress,
  Grid,
  Box,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import 'react-calendar/dist/Calendar.css'
import NewClientTable from '../components/newClientTable'
import { useProfile } from '../lib/hooks'
import IndexPieChart from '../components/indexPieChart'
import UpcomingAppointments from '../components/upcomingAppointments'
import Link from 'next/link'

const HomePage = () => {
  const { user, isLoading } = useProfile()
  return (
    <>
      <Box w="100vw" h="90vh">
        <Flex
          mb="30px"
          p="5"
          pb="3"
          borderBottom="1px solid #e6e6e6"
          justifyContent="space-between"
          w="100%"
          zIndex="10"
          backgroundColor="#fff"
        >
          <Heading as="h1" size="lg" fontWeight="300" pb="2" w="20%">
            Dashboard
          </Heading>
        </Flex>
        {isLoading ? (
          <CircularProgress
            isIndeterminate
            color="blue.300"
            size="80px"
            position="absolute"
            top="45%"
            left="45%"
          />
        ) : (
          user && (
            <Grid
              gridTemplateColumns="repeat(2, 1fr)"
              rowGap={6}
              p="0 20px 0 20px"
            >
              <GridItem colStart={1}>
                <Heading
                  as="h2"
                  fontWeight="normal"
                  fontSize="text.lg"
                  borderBottom="1px solid #f0f0f0"
                  w="50%"
                  pb="5px"
                  mb="15px"
                >
                  Newest Clients
                </Heading>
                {/* Current Client Table */}
                {user?.clients?.length > 0 ? (
                  <NewClientTable />
                ) : (
                  <Text>No Client or Appointment Data</Text>
                )}
              </GridItem>
              <GridItem colStart={2}>
                <Heading
                  as="h2"
                  fontWeight="normal"
                  fontSize="text.lg"
                  borderBottom="1px solid #f0f0f0"
                  w="50%"
                  pb="5px"
                  mb="15px"
                >
                  User Stats
                </Heading>
                {user?.clients?.length > 0 ? (
                  <IndexPieChart
                    clients={user?.clients?.length}
                    appointments={user?.appointments?.length}
                  />
                ) : (
                  <Text>No Client or Appointment Data</Text>
                )}
              </GridItem>
              <GridItem colSpan={2}>
                <Flex
                  borderBottom="1px solid #f0f0f0"
                  pb="5px"
                  mb="20px"
                  w="50%"
                  justifyContent="space-between"
                >
                  <Heading as="h2" fontWeight="normal" fontSize="text.lg">
                    Upcoming Apointments
                  </Heading>
                  <Link href="/userAppointments/appointmentIndex">
                    <Heading
                      as="h3"
                      _hover={{ cursor: 'pointer' }}
                      fontWeight="normal"
                      fontSize="text.md"
                    >
                      View All Appointments
                    </Heading>
                  </Link>
                </Flex>
                {user?.clients?.length > 0 ? (
                  <UpcomingAppointments />
                ) : (
                  <Text>No Client or Appointment Data</Text>
                )}
              </GridItem>
            </Grid>
          )
        )}
      </Box>
    </>
  )
}

export default HomePage
