import styles from '../styles/Home.module.css'
import { useProfile } from '../lib/hooks'
import { Text } from '@chakra-ui/react'
import { useRef } from 'react'

import {
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import CreateClientForm from '../components/createClientForm'
// import CreateAppointmentForm from '../components/createAppointmentForm'
import Link from 'next/link'
import ClientCard from '../components/clientCard'
import { LayoutGroup } from 'framer-motion'

//Dashboard
const Home = () => {
  const { user, isLoading } = useProfile()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
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
          <Heading as="h1" size="lg" fontWeight="300" pb="2" w="20%">
            My Clients
          </Heading>
          <Flex w="80%" justifyContent="end">
            <Flex mr="20px">
              <Input className="client-search-bar" w="100%" mr="10px" />
              <Button w="50%">Search</Button>
            </Flex>
            <Box>
              <Button
                ref={btnRef}
                onClick={onOpen}
                fontSize="text.md"
                borderRadius="50%"
                h="40px"
                w="40px"
              >
                +
              </Button>
            </Box>
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
                <GridItem w="100%">
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
        </Flex>
      </Box>
      {/* CreateAppointmentForm */}
      {/* Add Client Form here */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            backgroundColor="#025fc6"
            h="80px"
            w="100%"
            alignItems="center"
            justifyContent="right"
            p="25px"
          >
            <Heading fontSize="text.lg" fontWeight="light" color="white">
              Add a Client
            </Heading>
          </Flex>
          <DrawerBody>
            <CreateClientForm onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Home
