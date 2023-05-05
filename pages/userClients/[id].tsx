import {
  Box,
  Heading,
  Text,
  Flex,
  CircularProgress,
  Divider,
  Skeleton,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ClientDetailsInformation from '../../components/clientDetailsInformation'
import axios from 'axios'
// import { useProfile } from '../../lib/hooks'
import ClientDetailsNotes from '../../components/clientDetailsNotes'
import ClientDetailsAppointments from '../../components/clientDetailsAppointments'
// import { useClient } from '../../lib/hooks'

const ClientPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [client, setClient] = useState<any>({})

  const [isLoading, setIsLoading] = useState(false)

  // const { client, isLoading } = useClient(id)

  // Replace this with the useClient Hook once I figure out how to
  // This will give us caching etc.
  const getClient = async () => {
    setIsLoading(true)
    await axios
      .post(`${window.location.origin}/api/getClient/${id}`, {
        id,
      })
      .then((res) => {
        console.log(res.data)
        setClient(res.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getClient()
  }, [id])

  // const getAppointments = async () => {
  //   setIsLoading(true)
  //   await axios
  //     .post(`${window.location.origin}/api/getClientAppointments/${id}`, {
  //       id,
  //     })
  //     .then((res) => {
  //       console.log(res.data)
  //       setAppointmentData(res.data)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => console.log(error))
  // }

  return (
    <Box>
      <Flex
        mb="20px"
        p="3"
        pb="3"
        borderBottom="1px solid #e6e6e6"
        justifyContent="space-between"
        w="100%"
        zIndex="10"
        backgroundColor="#fff"
      >
        <Heading as="h1" size="lg" fontWeight="300" pb="2" w="100%">
          {isLoading ? (
            <Skeleton height="30px" />
          ) : client ? (
            client.firstName.slice(0, 1).toUpperCase() +
            client.firstName.slice(1) +
            ' ' +
            client.lastName.slice(0, 1).toUpperCase() +
            client.lastName.slice(1)
          ) : null}
        </Heading>
      </Flex>
      <Flex justifyContent="center">
        <Box
          width="90%"
          h="680px"
          borderRadius="10px"
          boxShadow="0 0 5px #bababa"
          padding="20px"
        >
          <Tabs>
            <TabList>
              <Tab>
                <Heading as="h2" fontSize="text.md" fontWeight="400">
                  Client Information
                </Heading>
              </Tab>
              <Tab>
                <Heading as="h2" fontSize="text.md" fontWeight="400">
                  Appointments
                </Heading>
              </Tab>
              <Tab>
                <Heading as="h2" fontSize="text.md" fontWeight="400">
                  Notes
                </Heading>
              </Tab>
            </TabList>
            <Box
              className="tab-content-container"
              mt="20px"
              // overflow="scroll"
            >
              <TabPanels>
                <TabPanel>
                  <Box>
                    {isLoading ? (
                      <CircularProgress
                        isIndeterminate
                        color="blue.300"
                        size="80px"
                        position="absolute"
                        top="55%"
                        left="45%"
                      />
                    ) : client ? (
                      <ClientDetailsInformation
                        firstName={client?.firstName}
                        lastName={client?.lastName}
                        age={client?.age}
                        phone={client?.phone}
                        email={client?.email}
                        bio={client?.about}
                        id={client?.id}
                      />
                    ) : (
                      <Heading as="h4" fontSize="text.lg">
                        No Client Data Found!
                      </Heading>
                    )}
                  </Box>
                </TabPanel>
                <TabPanel>
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      color="blue.300"
                      size="80px"
                      position="absolute"
                      top="55%"
                      left="45%"
                    />
                  ) : (
                    <ClientDetailsAppointments />
                  )}
                </TabPanel>
                <TabPanel>
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      color="blue.300"
                      size="80px"
                      position="absolute"
                      top="55%"
                      left="45%"
                    />
                  ) : (
                    <ClientDetailsNotes />
                  )}
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  )
}

export default ClientPage
