import { Box, Flex, FormLabel, Input, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { OutlineButton } from './buttons'
import { useRouter } from 'next/router'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const mailObj = {
      email,
    }

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(mailObj),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 401) {
        setError(true)
        setSuccess(false)
        console.log(error)
      } else {
        setEmail('')
        setSuccess(true)
        setError(false)
        setTimeout(() => {
          router.push('/signin')
        }, 3000)
      }
    })
  }

  return (
    <Flex
      className="forgot-pass-form-wrapper"
      justifyContent="center"
      width="500px"
      height="auto"
      backgroundColor={['transparent', 'transparent', '#fff']}
      borderRadius="13px"
      padding="30px"
      position="absolute"
      zIndex="5"
    >
      <Box className="forgot-pass-form-container" width="100%">
        {/* ADD IN LOGO AND HAVE IT REDIRECT TO HOMEPAGE */}

        {error && (
          <Box>
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>
          </Box>
        )}
        {success && (
          <Box>
            <Alert status="success">
              <AlertIcon />
              Success! Check your email!
            </Alert>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <Flex
            className="forgot-pass-form-content"
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            padding={['10px', '10px', '0']}
          >
            <Box className="forgot-pass-input" width="100%" pb="5">
              <FormLabel htmlFor="email" color={['#fff', '#fff', '#000']}>
                Email
              </FormLabel>
              <Input
                id="email"
                type="email"
                height="48px"
                borderStyle="solid"
                borderWidth={1}
                borderColor="#CCC"
                borderRadius={4}
                backgroundColor={['#fff', '#fff', 'transparent']}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="forgot-pass-button">
              <OutlineButton
                text={'Submit'}
                type={'submit'}
                loading={isLoading}
                backgroundColor="transparent"
                border="1px solid #ccc"
                borderRadius={4}
              />
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}
