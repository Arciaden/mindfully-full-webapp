import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

import logo from '../public/placeholderLogo.png'
import { OutlineButton } from './buttons'

const NavigationBar = ({ children }) => {
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
              <Text fontSize={22} fontWeight={500} ml="5">
                Mindfully Full
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <form method="POST" action="http://localhost:3000/api/logout">
            <Button
              type={'submit'}
              backgroundColor="#EDF1F2"
              color="#025fc6"
              borderRadius={4}
              px={30}
              size="md"
              fontWeight={400}
            >
              Logout
            </Button>
          </form>
        </Flex>
      </Flex>
      {children}
    </>
  )
}

export default NavigationBar
