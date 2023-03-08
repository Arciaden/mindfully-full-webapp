import styles from '../styles/Home.module.css'
import { useProfile } from '../lib/hooks'
import { Text } from '@chakra-ui/react'
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react'
import CreateAppointmentForm from '../components/createAppointmentForm'
import Link from 'next/link'
import ClientCard from '../components/clientCard'
import { LayoutGroup } from 'framer-motion'

//Dashboard
const Home = () => {
  const { user, isLoading } = useProfile()

  return (
    <Box>
      <Flex
        mb="10"
        p="5"
        pb="3"
        borderBottom="1px solid #e6e6e6"
        justifyContent="space-between"
        w="100%"
        zIndex="10"
        backgroundColor="#fff"
      >
        <Heading as="h1" size="lg" fontWeight="300" pb="2">
          My Clients
        </Heading>
        <Flex w="25%">
          <Input className="client-search-bar" w="75%" mr="10px" />
          <Button w="25%">Search</Button>
        </Flex>
      </Flex>
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
            {user?.clients?.map((client) => (
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
        {/* <CreateAppointmentForm /> */}
      </Flex>
    </Box>
  )
}

export default Home
