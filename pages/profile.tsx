import { useProfile } from '../lib/hooks'
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Grid,
  GridItem,
  FormControl,
  Button,
  IconButton,
  CircularProgress,
} from '@chakra-ui/react'
import { EditIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import ProfileEditForm from '../components/ProfileEditForm'
import ProfileInformation from '../components/ProfileInformation'

const ProfilePage = () => {
  const { user, isLoading } = useProfile()
  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit((state) => !state)
  }

  return (
    <Box>
      {isLoading ? (
        <Flex w="100%" h="85vh" justifyContent="center" alignItems="center">
          <CircularProgress isIndeterminate color="blue.300" size="80px" />
        </Flex>
      ) : (
        <>
          <Flex
            mb="10"
            p="5"
            pb="3"
            borderBottom="1px solid #e6e6e6"
            justifyContent="space-between"
            w="100%"
            zIndex="10"
            backgroundColor="#fff"
          >
            <Heading as="h1" size="lg" fontWeight="300" pb="2" w="20%">
              Profile
            </Heading>
          </Flex>
          <Box
            className="user-profile-content-container"
            p="20px 50px 20px 50px"
            h="100vh"
          >
            <Grid
              templateColumns="repeat(9, 1fr)"
              columnGap={3}
              alignItems="center"
            >
              {/* Avatar and Name */}
              <GridItem justifySelf="center">
                <Avatar
                  name={user?.firstName + ' ' + user?.lastName}
                  size="xl"
                  src={user?.imageUrl}
                  mr="15px"
                />
              </GridItem>
              <GridItem colSpan={7}>
                <Heading fontSize="text.xxl" fontWeight="normal" as="h2">
                  {user?.firstName + ' ' + user?.lastName}
                </Heading>
              </GridItem>
              <GridItem colStart={9}>
                <IconButton
                  aria-label="edit-button"
                  boxSize={5}
                  backgroundColor="transparent"
                  _active={{ backgroundColor: 'transparent' }}
                  _hover={{ cursor: 'pointer' }}
                  onClick={toggleEdit}
                  icon={edit ? <CloseIcon /> : <EditIcon />}
                ></IconButton>
              </GridItem>
              {edit ? (
                <ProfileEditForm
                  id={user?.id}
                  firstName={user?.firstName}
                  lastName={user?.lastName}
                  age={user?.age}
                  bio={user?.about}
                  email={user?.email}
                  phone={user?.phone}
                />
              ) : (
                <ProfileInformation
                  firstName={user?.firstName}
                  lastName={user?.lastName}
                  age={user?.age}
                  bio={user?.about}
                  email={user?.email}
                  phone={user?.phone}
                />
              )}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  )
}

export default ProfilePage
