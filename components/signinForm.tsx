import {
  Flex,
  Box,
  FormLabel,
  FormControl,
  Input,
  Link,
  FormErrorMessage,
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
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    if (!isError) {
      //This auth method is coming from the mutations.ts file
      await auth(mode, { email, password })
      setIsLoading(false)
      router.push('/')
    }
    setIsError(true)
    setIsLoading(false)
  }

  return (
    <Flex
      className="logo-and-form-container"
      direction="column"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      zIndex="5"
      width="100%"
      maxW="525px"
      height="100%"
      margin="20px"
    >
      <Box className="form-image-container" marginBottom="35px">
        <Image src={logo} priority={true} layout="fixed" />
      </Box>
      <Box
        className="signin-form"
        width="100%"
        height="auto"
        backgroundColor={['transparent', 'transparent', 'white']}
        borderRadius="13px"
        boxShadow={['none', 'none', '0px 0px 5px rgba(68, 125, 245, 0.4)']}
        padding={['40', '40px', '25px 25px 40px 25px']}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isError}>
            <FormLabel
              fontSize="text.xs"
              fontWeight="light"
              color={['white', 'white', 'black']}
              marginBottom="5px"
            >
              Username
            </FormLabel>
            <Input
              id="signin-email-input"
              type="email"
              required
              marginBottom="20px"
              borderRadius="3px"
              fontSize="text.xs"
              fontWeight="light"
              height="48px"
              backgroundColor={['white', 'white', 'transparent']}
              _active={{ border: 'border.textInputActive' }}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsError(false)
              }}
            />
            {/* <Flex
              className="forgot-username-contianer"
              margin="2px 0"
              justifyContent="end"
              color={['white', 'white', 'black']}
              fontSize="text.xxs"
            >
              <Link href="/user-help/forgotUsername">Forgot Username?</Link>
            </Flex> */}
            <FormLabel
              fontSize="text.xs"
              fontWeight="light"
              color={['white', 'white', 'black']}
              marginBottom="5px"
            >
              Password
            </FormLabel>
            <Input
              id="signin-password-input"
              type="password"
              height="48px"
              required
              borderRadius="3px"
              fontSize="text.xs"
              backgroundColor={['white', 'white', 'transparent']}
              _active={{ border: 'border.inputActive' }}
              onChange={(e) => {
                setPassword(e.target.value)
                setIsError(false)
              }}
            />

            <Flex
              className="forgot-password-container"
              margin="5px 0 30px 0"
              justifyContent="space-between"
              alignItems="center"
              color={['white', 'white', 'black']}
              fontSize="text.xxs"
            >
              {isError ? (
                <FormErrorMessage
                  fontSize="text.xxs"
                  color={['white', 'white', 'red']}
                  margin="0"
                >
                  Incorrect Username or Password
                </FormErrorMessage>
              ) : (
                <Box></Box>
              )}
              <Link href="/forgotPassword">Forgot Password?</Link>
            </Flex>

            <Flex className="signin-button-container" justifyContent="center">
              <OutlineButton
                text={'Sign In'}
                type={'submit'}
                loading={isLoading}
                backgroundColor={'black'}
              />
            </Flex>
          </FormControl>
        </form>
      </Box>
      <Box height="100px" marginTop="5px" color="white" fontSize="text.xs">
        {/* {isError ? ( */}
        <Link href="/signup">Don't have an account? Sign Up</Link>
        {/* ) : (
           ''
        )} */}
      </Box>
    </Flex>
  )
}

export default SigninForm
