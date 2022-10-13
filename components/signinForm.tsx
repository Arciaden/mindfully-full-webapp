import {
  Flex,
  Box,
  FormLabel,
  FormControl,
  Input,
  Link,
} from '@chakra-ui/react'
import { OutlineButton } from './buttons'
import Image from 'next/image'
import logo from '../public/placeholderLogo.png'
import { useState, FC } from 'react'
import { auth } from '../lib/mutations'
import { useRouter } from 'next/router'

//Making a seperate form component for signin & signup because the fields on each will be different

const SigninForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Flex
      className="logo-form-container"
      direction="column"
      alignItems="center"
      justifyContent="space-around"
      position="absolute"
      zIndex="5"
      width="100%"
      maxW="450px"
      height="400px"
      margin="20px"
    >
      <Box className="form-image-container">
        <Image src={logo} layout="fixed" />
      </Box>
      <Box
        className="signin-form"
        width="100%"
        maxWidth="650px"
        height="auto"
        backgroundColor={['transparent', 'transparent', 'white']}
        borderRadius="10px"
        boxShadow={['none', 'none', '0px 0px 5px rgba(68, 125, 245, 0.4)']}
        padding={['7']}
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel
              fontSize="text.xs"
              fontWeight="light"
              color={['white', 'white', 'black']}
              marginBottom="5px"
            >
              Username
            </FormLabel>
            <Input
              type="email"
              required
              backgroundColor={['white', 'white', 'transparent']}
              borderRadius="3px"
              _active={{ border: 'border.textInputAtive' }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Flex
              className="forgot-username-contianer"
              margin="2px 0"
              justifyContent="end"
              color={['white', 'white', 'black']}
              fontSize="text.xxs"
            >
              <Link href="/user-help/forgotUsername">Forgot Username?</Link>
            </Flex>
            <FormLabel
              fontSize="text.xs"
              fontWeight="light"
              color={['white', 'white', 'black']}
              marginBottom="5px"
            >
              Password
            </FormLabel>
            <Input
              type="password"
              required
              borderRadius="3px"
              backgroundColor={['white', 'white', 'transparent']}
              _active={{ border: 'border.inputActive' }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Flex
              className="forgot-password-contianer"
              margin="15px 0"
              justifyContent="end"
              color={['white', 'white', 'black']}
              fontSize="text.xxs"
            >
              <Link href="/user-help/forgotPassword">Forgot Password?</Link>
            </Flex>
            <Flex className="signin-button-container" justifyContent="center">
              <OutlineButton
                text={'Sign In'}
                type={'submit'}
                loading={isLoading}
              />
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Flex>
  )
}

export default SigninForm
