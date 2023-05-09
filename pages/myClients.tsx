import { useProfile } from '../lib/hooks'
import { useRef, useState } from 'react'

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
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'
import CreateClientForm from '../components/createClientForm'
// import CreateAppointmentForm from '../components/createAppointmentForm'
import ClientCard from '../components/clientCard'
import { LayoutGroup } from 'framer-motion'
import { SearchIcon } from '@chakra-ui/icons'

//Skeleton Cards Array
const skeletons = [1, 2, 3, 4, 5, 6]

//Client Search Stuff

//My Clients Page
//Need to add loading graphics to this page
const MyClients = () => {
  const { user } = useProfile()
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  //Search Bar Functionality
  //Declaring an empty array to push the user.clients object into for easy filtering
  const clients = []

  //Pushing the user.clients object into the clients array
  user?.clients?.map((client) => {
    clients.push(client)
  })

  //Filter Function, this will allow the user to use the search bar to find clients by name
  const getFilteredClients = (query, clients) => {
    if (!query) {
      return clients
    }
    return clients.filter((client) =>
      client.fullName.includes(query.toLowerCase())
    )
  }

  //Calling the filter function and passing the query from User Input and the clients array (which is an array made up of objects)
  const filteredClients = getFilteredClients(query, clients)

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
          <Heading as="h1" size="lg" fontWeight="300" pb="2" w="13%">
            My Clients
          </Heading>
          <InputGroup width="75%">
            <Input
              className="client-search-bar"
              placeholder="Search for a client"
              type="text "
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.400" />}
            />
          </InputGroup>
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

        <Flex
          className="dashboard-wrapper"
          justifyContent="center"
          margin="50px"
        >
          <Grid
            className="dashboard-container"
            gridTemplateColumns="repeat(3, 1fr)"
            w="100%"
            gap={7}
            rowGap={4}
            justifyContent="center"
          >
            {/* //Styling for loaded client cards */}
            <LayoutGroup>
              {user ? (
                filteredClients
                  .map((client) => (
                    <GridItem>
                      <ClientCard
                        key={client.id}
                        firstName={client.firstName}
                        lastName={client.lastName}
                        age={client.age}
                        bio={client.about}
                        email={client.email}
                        phone={client.phone}
                        imageUrl={client.imageUrl}
                        id={client.id}
                      />
                    </GridItem>
                  ))
                  .sort()
                  .reverse()
              ) : (
                //Skeletons of the cards for loading
                <>
                  {skeletons.map((skeleton, i) => (
                    <GridItem w="100%" key={skeleton[i]}>
                      <Box padding="6" boxShadow="lg" bg="white">
                        <SkeletonCircle size="10" />
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="9"
                        />
                      </Box>
                    </GridItem>
                  ))}
                </>
              )}
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

export default MyClients
