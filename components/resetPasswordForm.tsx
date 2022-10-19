import {
  Box,
  Button,
  Input,
  FormLabel,
  Flex,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SunIcon } from '@chakra-ui/icons'

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)

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
        <Flex
          id="reset-pass-form-content"
          backgroundColor="white"
          borderRadius="13px"
          padding="30px"
          direction="column"
          justifyContent="center"
          height="auto"
        >
          {error && (
            <Box mb="20px">
              <Alert status="error">
                <AlertIcon />
                There was an error processing your request
              </Alert>
            </Box>
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
          <Flex>
            <FormLabel>New Password</FormLabel>
            <Input type="email" value={email} mb="3" readOnly hidden />
            <Input
              type={showFirst ? 'text' : 'password'}
              mb="5"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <SunIcon onClick={() => setShowFirst(!showFirst)} />
          </Flex>
          <Flex>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type={showSecond ? 'text' : 'password'}
              mb="5"
              onChange={(e) => setPassword(e.target.value)}
            />
            <SunIcon onClick={() => setShowSecond(!showSecond)} />
          </Flex>

          <Button type="submit">Change Password</Button>
        </Flex>
      </form>
    </Box>
  )
}
