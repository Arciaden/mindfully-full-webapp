import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useProfile } from '../lib/hooks'

import logo from '../public/placeholderLogo.png'
import { OutlineButton } from './buttons'

const NavigationBar = ({ children }) => {
  const { user, isLoading } = useProfile()

  return (
    <>
      <Flex
        width="100%"
        height="80px"
        justifyContent="space-between"
        align-items="center"
        backgroundColor="#025fc6"
        color="white"
        px="5"
      >
        <Flex justifyContent="end" alignItems="center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Flex alignItems="center">
              <Image src={logo} height="50%" width="50%" />
              <Text fontSize="text.lg" fontWeight={500} ml="5">
                Mindfully Full
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex w="70%" alignItems="center" justifyContent="left">
          <Link
            href="/myClients"
            style={{ textDecoration: 'none', marginRight: '10px' }}
          >
            <Text>My Clients</Text>
          </Link>
          <Link
            href="/userAppointments/appointmentIndex"
            style={{ textDecoration: 'none', marginRight: '10px' }}
          >
            <Text>My Appointments</Text>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Link href="/profile">
            <Avatar
              name={user?.firstName + ' ' + user?.lastName}
              size="md"
              src={user?.imageUrl}
              mr="15px"
            />
          </Link>
          <form method="POST" action="http://localhost:3000/api/logout">
            <button type={'submit'}>Logout</button>
          </form>
        </Flex>
      </Flex>
      {children}
    </>
  )
}

export default NavigationBar
