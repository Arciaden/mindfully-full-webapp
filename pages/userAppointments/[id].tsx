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
  Input,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'
import axios from 'axios'
import { CloseIcon, EditIcon } from '@chakra-ui/icons'
import AppointmentNotesForm from '../../components/appointmentNotesForm'

const AppointmentPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [appointment, setAppointment] = useState<any>({})
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [edit, setEdit] = useState<Boolean>(false)

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

  const toggleEdit = () => {
    setEdit((state) => !state)
  }

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
      <Flex justifyContent="center" mb="15px">
        <Box
          width="90%"
          h="680px"
          borderRadius="10px"
          boxShadow="0 0 5px #bababa"
          padding="20px"
        >
          {appointment ? (
            <Flex justifyContent="space-between">
              <Heading as="h2" fontSize="text.xl" fontWeight="normal">
                {appointment.clientName?.toUpperCase()}
              </Heading>
              <Flex>
                <Heading
                  as="h2"
                  fontSize="text.xl"
                  mr="15px"
                  fontWeight="normal"
                >
                  {DateTime.fromISO(appointment.date).toLocaleString()}
                </Heading>
                <Heading as="h2" fontSize="text.xl" fontWeight="normal">
                  {appointment.time > 1200
                    ? String(appointment.time - 1200).replace(/(.{2})$/, ':$1')
                    : String(appointment.time).replace(/(.{2})$/, ':$1')}
                  {appointment.time > 1200 ? ' PM' : ' AM'}
                </Heading>
              </Flex>
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
                <>
                  <Heading as="h2" fontSize="text.md" fontWeight="400">
                    Notes
                  </Heading>
                </>
              </Tab>
            </TabList>
            <Box
              className="tab-content-container"
              mt="20px"
              position="relative"
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
                      <>
                        {edit ? (
                          <AppointmentNotesForm
                            title={appointment.appointmentPlanTitle}
                            type={appointment.type}
                            duration={appointment.appointmentDuration}
                            description={appointment.appointmentPlanDescription}
                          />
                        ) : (
                          <>
                            <Flex justifyContent="space-between" mb="20px">
                              <Flex flexDirection="column" w="32%">
                                <Heading
                                  as="h3"
                                  fontSize="text.xl"
                                  fontWeight="normal"
                                  borderBottom="1px solid #e6e6e6"
                                  pb="5px"
                                  w="75%"
                                >
                                  Title
                                </Heading>
                                <Text pt="5px" pl="5px" fontSize="text.md">
                                  {appointment?.appointmentPlanTitle}
                                </Text>
                              </Flex>
                              <Flex flexDirection="column" w="32%">
                                <Heading
                                  as="h3"
                                  fontSize="text.xl"
                                  fontWeight="normal"
                                  borderBottom="1px solid #e6e6e6"
                                  pb="5px"
                                  w="75%"
                                >
                                  Type
                                </Heading>
                                <Text pt="5px" pl="5px" fontSize="text.md">
                                  {appointment?.type}
                                </Text>
                              </Flex>
                              <Flex flexDirection="column" w="32%">
                                <Heading
                                  as="h3"
                                  fontSize="text.xl"
                                  fontWeight="normal"
                                  borderBottom="1px solid #e6e6e6"
                                  pb="5px"
                                  w="75%"
                                >
                                  Duration
                                </Heading>
                                {appointment?.appointmentDuration >= 3601 ? (
                                  <Text pt="5px" ml="5px" fontSize="text.md">
                                    {Math.floor(
                                      appointment?.appointmentDuration / 3600
                                    )}{' '}
                                    Hours
                                  </Text>
                                ) : (
                                  <Text pt="5px" pl="5px" fontSize="text.md">
                                    {Math.floor(
                                      appointment?.appointmentDuration / 60
                                    )}{' '}
                                    Minutes
                                  </Text>
                                )}
                              </Flex>
                            </Flex>
                            <Flex flexDirection="column">
                              <Heading
                                as="h3"
                                fontSize="text.xl"
                                fontWeight="normal"
                                borderBottom="1px solid #e6e6e6"
                                w="75%"
                                pb="5px"
                              >
                                Description
                              </Heading>
                              <Text pt="5px" pl="5px" fontSize="text.md">
                                {appointment?.appointmentPlanDescription}
                              </Text>
                            </Flex>
                          </>
                        )}
                      </>
                    ) : null}
                  </Box>
                  <Box
                    position="absolute"
                    top="0"
                    right="2%"
                    _hover={{ cursor: 'pointer' }}
                    onClick={toggleEdit}
                  >
                    {edit ? <CloseIcon /> : <EditIcon />}
                  </Box>
                </TabPanel>
                <TabPanel>
                  {isLoading && appointment ? (
                    <CircularProgress
                      isIndeterminate
                      color="blue.300"
                      size="80px"
                      position="absolute"
                      top="55%"
                      left="45%"
                    />
                  ) : (
                    <Flex>
                      {appointment.appointmentNotes ? (
                        <Text>{appointment.appointmentNotes}</Text>
                      ) : (
                        'No notes yet'
                      )}
                    </Flex>
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
