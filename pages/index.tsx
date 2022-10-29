import styles from '../styles/Home.module.css'
import { useProfile } from '../lib/hooks'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem, Box, Heading, Flex } from '@chakra-ui/react'
import CreateAppointmentForm from '../components/createAppointmentForm'
import Link from 'next/link'
import ClientCard from '../components/clientCard'
import { LayoutGroup } from 'framer-motion'

//Dashboard
const Home = () => {
  const { user, isLoading } = useProfile()

  return (
    <>
      <Box>
        <Heading>Dashboard</Heading>
      </Box>
      <Flex className="dashboard-wrapper" justifyContent="center">
        <Grid
          className="dashboard-container"
          gridTemplateColumns="repeat(3, 1fr)"
          w="90%"
          gap={4}
          rowGap={4}
          justifyContent="center"
        >
          <LayoutGroup>
            {user?.clients.map((client) => (
              <GridItem w="95%">
                <ClientCard
                  key={client.id}
                  firstName={client.firstName}
                  lastName={client.lastName}
                  age={client.age}
                  bio={client.about}
                  email={client.email}
                  phone={client.phone}
                  id={client.id}
                />
              </GridItem>
            ))}
          </LayoutGroup>
        </Grid>
        {/* <Text>Welcome to Mindfully Well!</Text>

        <Text>{user?.firstName}</Text>
        <Grid templateColumns="repeat(2, 1fr)" width="100%" height="100%">
          {user?.appointments &&
            user.appointments.map((appointment) => (
              <GridItem bg="tomato">
                <Link href={`/userAppointments/${appointment.id}`}>
                  <Text _hover={{ cursor: 'pointer' }}>{appointment.type}</Text>
                </Link>
                <Text>{user?.firstName}</Text>
                <Text>{appointment.clientName}</Text>
              </GridItem>
            ))}
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" width="100%" height="100%">
          {user?.clients &&
            user.clients.map((client) => (
              <GridItem bg="tomato" border="1px solid black" p="5" m="2">
                <Grid templateColumns="repeat(3, 1fr)">
                  <GridItem border="1px solid black">
                    <Text>First Name</Text>
                  </GridItem>
                  <GridItem border="1px solid black">
                    <Text>Last Name</Text>
                  </GridItem>
                  <GridItem border="1px solid black">
                    <Text>Age</Text>
                  </GridItem>
                  <Link href={`/userClients/${client.id}`}>
                    <GridItem border="1px solid black">
                      <Text _hover={{ cursor: 'pointer' }}>
                        {client.firstName} {client.lastName}
                      </Text>
                    </GridItem>
                  </Link>
                  <GridItem border="1px solid black">
                    <Text>{client.age}</Text>
                  </GridItem>
                </Grid>
              </GridItem>
            ))}
        </Grid>
        <CreateAppointmentForm /> */}
      </Flex>
    </>
  )
}

export default Home
