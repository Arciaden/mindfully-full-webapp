import { Box, Button, Heading, Text } from '@chakra-ui/react'
import CreateAppointmentSidebar from './createAppointmentSidebar'

const AppointmentsSidebar = () => {
  return (
    <Box
      h="95%"
      w="100%"
      m="20px"
      p="15px"
      boxShadow="0 0 5px #f0f0f0"
      borderRadius="10px"
    >
      {/* <Heading as="h3" fontSize="lg">
        Appointment Details
      </Heading> */}
      <Heading as="h2" size="md">
        Create Appointment
      </Heading>
      <CreateAppointmentSidebar />
    </Box>
  )
}

export default AppointmentsSidebar
