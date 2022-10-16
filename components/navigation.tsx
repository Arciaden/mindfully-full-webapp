import { Box, Button } from '@chakra-ui/react'

export const NavigationBar = () => {
  return (
    <Box>
      <form method="POST" action="http://localhost:3000/api/logout">
        <Button type="submit">Logout</Button>
      </form>
    </Box>
  )
}
