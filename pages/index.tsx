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
        <NavigationBar />
        <Text>{user?.firstName}</Text>
        {user?.appointments &&
          user.appointments.map((appointment) => (
            <Text>{appointment.type}</Text>
          ))}
        {user?.clients &&
          user.clients.map((client) => (
            <Text>
              {client.firstName} {client.lastName}
            </Text>
          ))}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Mindfully Well!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
