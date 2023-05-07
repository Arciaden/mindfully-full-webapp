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
import AppointmentInfoForm from '../../components/appointmentInfoForm'
import AppointmentNotesForm from '../../components/appointmentNotesForm'
import CreateAppointmentNotes from '../../components/createAppointmentNotes'

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
                        <AppointmentInfoForm
                          id={appointment.id}
                          title={appointment.appointmentPlanTitle}
                          type={appointment.type}
                          duration={appointment.appointmentDuration}
                          description={appointment.appointmentPlanDescription}
                        />
                      </>
                    ) : null}
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
                        <AppointmentNotesForm
                          id={id}
                          note={appointment.appointmentNotes}
                        />
                      ) : (
                        <CreateAppointmentNotes id={id} />
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
