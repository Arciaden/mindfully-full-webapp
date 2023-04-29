import {
  Box,
  Heading,
  Text,
  CircularProgress,
  Flex,
  Tabs,
  TabPanel,
  TabPanels,
  Skeleton,
  Tab,
  TabList,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'
import axios from 'axios'

const AppointmentPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [appointment, setAppointment] = useState<Object>({})
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  //Replace this with the useAppointment Hook once I figure out how to
  //This will give us caching etc.
  const getAppointment = async () => {
    await axios
      .post(`${window.location.origin}/api/getAppointment/${id}`, {
        id: id,
      })
      .then((res) => setAppointment(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    id ? getAppointment() : null
  }, [id])

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
          Appointment Information
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
          {appointment ? (
            <Flex>
              <Heading>{appointment.clientName}</Heading>
              <Heading>
                {DateTime.fromISO(appointment.date).toLocaleString()}
              </Heading>
              {appointment.time > 1200
                ? String(appointment.time - 1200).replace(/(.{2})$/, ':$1')
                : String(appointment.time).replace(/(.{2})$/, ':$1')}
              {appointment.time > 1200 ? ' PM' : ' AM'}
            </Flex>
          ) : null}

          <Tabs>
            <TabList>
              <Tab>
                <Heading as="h2" fontSize="text.md" fontWeight="400">
                  Details
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
                    ) : appointment ? (
                      <Box>
                        <Heading>stuff</Heading>
                      </Box>
                    ) : null}
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
                    <div>stuff</div>
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
                    <div>stuff</div>
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

export default AppointmentPage
