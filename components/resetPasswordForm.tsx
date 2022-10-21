import {
  Box,
  Button,
  Input,
  FormLabel,
  Flex,
  Alert,
  AlertIcon,
  FormControl,
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
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleResetPassword = async (e) => {
    e.preventDefault()
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
        } else {
          setSuccess(true)
          setError(false)
          setTimeout(() => {
            router.push('/signin')
          }, 3000)
        }
      })
      // .catch((error) => console.log(error))
    } else {
      setPasswordError(true)
    }
  }

  useEffect(() => {
    const userEmail = router.asPath.split('/')[2]
    setEmail(userEmail)
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
            {error ? (
              <Box mb="20px">
                <Alert status="error">
                  <AlertIcon />
                  There was an error processing your request
                </Alert>
              </Box>
            ) : (
              ''
            )}
            {passwordError && (
              <Box mb="20px">
                <Alert status="error">
                  <AlertIcon />
                  Passwords Don't Match
                </Alert>
              </Box>
            )}
            {success && (
              <Box mb="20px">
                <Alert status="success">
                  <AlertIcon />
                  Success! Check your email!
                </Alert>
              </Box>
            )}

            <FormLabel color={['#fff', '#fff', '#000']}>New Password</FormLabel>
            <Flex alignContent="center" height="100%" width="100%">
              <Input type="email" value={email} mb="3" readOnly hidden />
              <Input
                type={showFirst ? 'text' : 'password'}
                backgroundColor="white"
                color={['#fff', '#fff', '#000']}
                onChange={(e) => {
                  setNewPassword(e.target.value)
                  setError(false)
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
                onChange={(e) => setPassword(e.target.value)}
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
