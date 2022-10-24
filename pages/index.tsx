import styles from '../styles/Home.module.css'
import { useProfile } from '../lib/hooks'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem, Box, Heading } from '@chakra-ui/react'
import CreateAppointmentForm from '../components/createAppointmentForm'

//Dashboard
const Home = () => {
  const { user, isLoading } = useProfile()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Text>Welcome to Mindfully Well!</Text>

        <Text>{user?.firstName}</Text>
        <Grid templateColumns="repeat(2, 1fr)" width="100%" height="100%">
          {user?.appointments &&
            user.appointments.map((appointment) => (
              <GridItem bg="tomato">
                <Text>{appointment.type}</Text>
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
                  <GridItem border="1px solid black">
                    <Text>{client.firstName}</Text>
                  </GridItem>
                  <GridItem border="1px solid black">
                    <Text>{client.lastName}</Text>
                  </GridItem>
                  <GridItem border="1px solid black">
                    <Text>{client.age}</Text>
                  </GridItem>
                </Grid>
              </GridItem>
            ))}
        </Grid>
        <CreateAppointmentForm />
      </main>
    </div>
  )
}

export default Home
