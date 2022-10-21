import {
  Box,
  Button,
  Input,
  FormLabel,
  Flex,
  Alert,
  AlertIcon,
  FormControl,
  ScaleFade,
  useDisclosure,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { OutlineButton } from './buttons'

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [disabled, setDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleResetPassword = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const userInformation = {
      email,
      password: newPassword,
    }
    if (password === newPassword) {
      await fetch('/api/resetPassword', {
        method: 'POST',
        body: JSON.stringify(userInformation),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status === 401) {
          setError(true)
          setSuccess(false)
          setDisabled(true)
          setIsLoading(false)
          onOpen()
        } else {
          setSuccess(true)
          setError(false)
          setIsLoading(false)
          setTimeout(() => {
            router.push('/signin')
          }, 3000)
          onOpen()
        }
      })
      // .catch((error) => console.log(error))
    } else {
      onOpen()
      setPasswordError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const userEmail = router.asPath.split('/')[2]
    setEmail(userEmail)
    onOpen()
  })

  return (
    <Box position="absolute" zIndex="5" width="500px">
      <form onSubmit={handleResetPassword}>
        <FormControl isInvalid={error}>
          <Flex
            id="reset-pass-form-content"
            borderRadius="13px"
            direction="column"
            justifyContent="center"
            height="auto"
            padding={['10', '40px', '25px 25px 40px 25px']}
            backgroundColor={['transparent', 'transparent', 'white']}
            boxShadow={['none', 'none', '0px 0px 5px rgba(68, 125, 245, 0.4)']}
          >
            {!error && !passwordError && !success && (
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Box mb="20px">
                  <Alert status="info" borderRadius={4}>
                    <AlertIcon />
                    Enter and Confirm a New Password
                  </Alert>
                </Box>
              </ScaleFade>
            )}
            {error && (
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Box mb="20px" borderRadius={4}>
                  <Alert status="error">
                    <AlertIcon />
                    Link Invalid Please Request Another Link
                  </Alert>
                </Box>
              </ScaleFade>
            )}
            {passwordError && (
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Box borderRadius={4} mb="20px">
                  <Alert status="error">
                    <AlertIcon />
                    Passwords Don't Match
                  </Alert>
                </Box>
              </ScaleFade>
            )}
            {success && (
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Box mb="20px">
                  <Alert status="success">
                    <AlertIcon />
                    Success! Check your email!
                  </Alert>
                </Box>
              </ScaleFade>
            )}

            <FormLabel color={['#fff', '#fff', '#000']}>New Password</FormLabel>
            <Flex alignContent="center" height="100%" width="100%">
              <Input type="email" value={email} mb="3" readOnly hidden />
              <Input
                type={showFirst ? 'text' : 'password'}
                backgroundColor="white"
                height="45px"
                color={['#fff', '#fff', '#000']}
                onChange={(e) => {
                  setNewPassword(e.target.value)
                  setError(false)
                  setPasswordError(false)
                  onClose()
                  onOpen()
                }}
              />
              <Flex
                className="icon-container"
                alignItems="center"
                ml="-7"
                zIndex="6"
                _hover={{
                  cursor: 'pointer',
                }}
              >
                {showFirst ? (
                  <ViewOffIcon onClick={() => setShowFirst(!showFirst)} />
                ) : (
                  <ViewIcon onClick={() => setShowFirst(!showFirst)} />
                )}
              </Flex>
            </Flex>

            <FormLabel mt="5" color={['#fff', '#fff', '#000']}>
              Confirm Password
            </FormLabel>
            <Flex alignContent="center" height="100%" width="100%" mb="5">
              <Input
                type={showSecond ? 'text' : 'password'}
                height="45px"
                backgroundColor="white"
                isInvalid={error}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                  setPasswordError(false)
                }}
              />

              <Flex
                className="icon-container"
                alignItems="center"
                ml="-7"
                zIndex="5"
                _hover={{
                  cursor: 'pointer',
                }}
              >
                {showSecond ? (
                  <ViewOffIcon onClick={() => setShowSecond(!showSecond)} />
                ) : (
                  <ViewIcon onClick={() => setShowSecond(!showSecond)} />
                )}
              </Flex>
            </Flex>
            <Flex className="button-container" justifyContent="center">
              <OutlineButton
                text={'Reset Password'}
                type={'submit'}
                loading={isLoading}
                backgroundColor={'#fff'}
                borderRadius={4}
                border={'1px solid #ccc'}
              />
            </Flex>
          </Flex>
        </FormControl>
      </form>
    </Box>
  )
}
