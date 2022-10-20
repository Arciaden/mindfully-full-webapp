import {
  Flex,
  Box,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  FormErrorMessage,
  Link,
  InputLeftElement,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState(null)
  const [age, setAge] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    if (!isError) {
      //This auth method is coming from the mutations.ts file
      await auth(mode, { email, password, firstName, lastName, phone, age })
      setIsLoading(false)
      console.log(email, password, firstName, lastName, phone, age)
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
      maxW="650px"
      height="auto"
      margin="20px"
    >
      <Box className="form-image-container" marginBottom="35px">
        <Image src={logo} priority={true} layout="fixed" />
      </Box>
      <Box
        className="signin-form"
        width="100%"
        height="auto"
        backgroundColor={['transparent', 'transparent', '#fff']}
        borderRadius="10px"
        boxShadow={['none', 'none', '0px 0px 5px rgba(68, 125, 245, 0.4)']}
        padding={['40', '40px', '25px 25px 40px 25px']}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isError}>
            {/* 1nd row inputs */}
            <Flex
              className="firstname-and-lastname-container"
              justifyContent="space-between"
              marginBottom="20px"
            >
              <Flex
                className="firstname-input-container"
                direction="column"
                width="49%"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  First Name
                </FormLabel>
                <Input
                  id="signup-firstname-input"
                  type="text"
                  required
                  height="48px"
                  borderRadius="3px"
                  fontSize="text.xs"
                  fontWeight="light"
                  backgroundColor={['#fff', '#fff', 'transparent']}
                  _active={{ border: 'border.textInputAtive' }}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                    setIsError(false)
                  }}
                />
              </Flex>
              <Flex
                className="lastname-input-container"
                direction="column"
                width="49%"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  Last Name
                </FormLabel>
                <Input
                  id="signup-lastname-input"
                  type="text"
                  required
                  height="48px"
                  borderRadius="3px"
                  fontSize="text.xs"
                  backgroundColor={['#fff', '#fff', 'transparent']}
                  _active={{ border: 'border.inputActive' }}
                  onChange={(e) => {
                    setLastName(e.target.value)
                    setIsError(false)
                  }}
                />
              </Flex>
            </Flex>

            {/* 2nd row inputs */}
            <Flex
              className="email-and-password-container"
              justifyContent="space-between"
              direction="column"
              marginBottom="20px"
            >
              <Flex
                className="email-input-container"
                direction="column"
                width="100%"
                marginBottom="20px"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  Email
                </FormLabel>
                <Input
                  id="signup-email-input"
                  type="email"
                  required
                  height="48px"
                  borderRadius="3px"
                  fontSize="text.xs"
                  fontWeight="light"
                  backgroundColor={['#fff', '#fff', 'transparent']}
                  _active={{ border: 'border.textInputAtive' }}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setIsError(false)
                  }}
                />
              </Flex>
              <Flex
                className="password-input-container"
                direction="column"
                width="100%"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  Password
                </FormLabel>
                <Input
                  id="signup-password-input"
                  type="password"
                  required
                  height="48px"
                  borderRadius="3px"
                  fontSize="text.xs"
                  backgroundColor={['#fff', '#fff', 'transparent']}
                  _active={{ border: 'border.inputActive' }}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setIsError(false)
                  }}
                />
              </Flex>
            </Flex>

            {/* 3rd row input */}
            <Flex
              className="age-and-phone-container"
              justifyContent="space-between"
              marginBottom="20px"
            >
              <Flex
                className="age-input-container"
                direction="column"
                width="25%"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  Age
                </FormLabel>
                <Input
                  id="signup-age-input"
                  type="number"
                  required
                  height="48px"
                  min={18}
                  max={99}
                  pattern="/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])"
                  borderRadius="3px"
                  fontSize="text.xs"
                  fontWeight="light"
                  backgroundColor={['#fff', '#fff', 'transparent']}
                  _active={{ border: 'border.textInputAtive' }}
                  onChange={(e) => {
                    setAge(Number(e.target.value))
                    setIsError(false)
                  }}
                />
              </Flex>
              <Flex
                className="password-input-container"
                direction="column"
                width="73%"
              >
                <FormLabel
                  fontSize="text.xs"
                  fontWeight="light"
                  color={['#fff', '#fff', 'black']}
                  marginBottom="5px"
                >
                  Phone Number
                </FormLabel>
                <InputGroup>
                  <InputLeftElement children={<PhoneIcon color="gray.300" />} />
                  <Input
                    display="flex"
                    alignItems="center"
                    id="signup-password-input"
                    type="phone"
                    required
                    height="48px"
                    borderRadius="3px"
                    fontSize="text.xs"
                    backgroundColor={['#fff', '#fff', 'transparent']}
                    _active={{ border: 'border.inputActive' }}
                    onChange={(e) => {
                      setPhone(Number(e.target.value))
                      setIsError(false)
                    }}
                  />
                </InputGroup>
              </Flex>
            </Flex>

            <Flex className="signin-button-container" justifyContent="center">
              <OutlineButton
                text={'Sign Up'}
                type={'submit'}
                loading={isLoading}
                backgroundColor={'#fff'}
                borderRadius={4}
                border="1px solid #ccc"
              />
            </Flex>
          </FormControl>
        </form>
      </Box>
      <Box height="100px" marginTop="5px" color="#fff" fontSize="text.xs">
        <Link href="/signin">Already Have an Account? Sign In</Link>
      </Box>
    </Flex>
  )
}

export default SigninForm
