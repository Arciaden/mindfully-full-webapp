import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { ForgotPasswordForm } from '../components/forgotPasswordForm'
import backgroundImage from '../public/yoga-mat.jpeg'
import { useMediaQuery } from '@chakra-ui/react'

const ForgotPassword = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')
  return (
    <Flex
      className="forgot-pass-wrapper"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
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

export default ForgotPassword
