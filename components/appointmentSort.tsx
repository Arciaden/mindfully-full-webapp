import { Box, Input, Select } from '@chakra-ui/react'

const AppointmentSort = () => {
  return (
    <Box>
      <Select>
        <option value="a-z">Newest</option>
        <option value="z-a">Oldest</option>
        <option value="calisthenics">Duration A - Z</option>
        <option value="calisthenics">Duration Z - A</option>
      </Select>
    </Box>
  )
}

export default AppointmentSort
