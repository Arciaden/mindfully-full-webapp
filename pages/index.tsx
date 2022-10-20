import styles from '../styles/Home.module.css'
import { NavigationBar } from '../components/navigation'
import { useProfile } from '../lib/hooks'
import { Text } from '@chakra-ui/react'

//Dashboard
const Home = () => {
  const { user, isLoading } = useProfile()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Text>Welcome to Mindfully Well!</Text>
        <NavigationBar />
        <Text>{user?.firstName}</Text>
        {user?.appointments &&
          user.appointments.map((appointment) => (
            <>
              <Text>{appointment.type}</Text>
            </>
          ))}
        {user?.clients &&
          user.clients.map((client) => (
            <Text>
              {client.firstName} {client.lastName}
            </Text>
          ))}
      </main>
    </div>
  )
}

export default Home
