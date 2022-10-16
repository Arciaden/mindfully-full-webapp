import { useProfile } from '../lib/hooks'
import { Box, Text, Button } from '@chakra-ui/react'

const ProfilePage = () => {
  const { user, isLoading } = useProfile()

  return (
    <Box>
      <Text>
        User: {user?.firstName} {user?.lastName}
      </Text>

      {isLoading ? <Text>Loading</Text> : <Text>False Loading</Text>}
    </Box>
  )
}

export default ProfilePage
