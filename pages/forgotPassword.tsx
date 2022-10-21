import { Flex, Box, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { ForgotPasswordForm } from '../components/forgotPasswordForm'
import backgroundImage from '../public/yoga-mat.jpeg'

const ForgotPassword = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')
  return (
    <Flex
      className="forgot-password-wrapper"
      width="100vw"
      height="100vh"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="overlay"
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="brand.overlay"
        top="0"
        left="0"
        zIndex="1"
      ></Box>
      <ForgotPasswordForm />
      <Image
        className="signin-background-image"
        src={backgroundImage}
        layout="fill"
        objectPosition={isMobile ? '95%' : '50%'}
        objectFit="cover"
      />
    </Flex>
  )
}

ForgotPassword.authPage = true

export default ForgotPassword
