import { Box, Text, Flex } from '@chakra-ui/react'

import AppointmentCalendar from '../../components/appointmentCalendar'
import AppointmentsSidebar from '../../components/appointmentsSidebar'

const AppointmentsIndex = () => {
  return (
    <Flex>
      <Box className="appointment-sidebar-container">
        <AppointmentsSidebar />
      </Box>
      <Box w="75%">
        <AppointmentCalendar />
      </Box>
    </Flex>
  )
}

export default AppointmentsIndex
