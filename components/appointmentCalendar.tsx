import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Calendar from 'react-calendar'

const IndexCalendar = () => {
  const [value, onChange] = useState(new Date())

  return (
    <Box>
      <Calendar showFixedNumberOfWeeks={true} />
    </Box>
  )
}

export default IndexCalendar
