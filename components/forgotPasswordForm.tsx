import { Box, Flex, FormLabel, Input } from '@chakra-ui/react'
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
      height="250px"
      backgroundColor="white"
      borderRadius="13px"
      padding="30px"
      position="absolute"
      zIndex="5"
    >
      <Box
        className="forgot-pass-form-container"
        width="100%"
        marginBottom="20px"
      >
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
          <FormLabel htmlFor="email">Email</FormLabel>
          <Flex
            className="forgot-pass-form-content"
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box className="forgot-pass-input" width="100%" pb="5">
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="forgot-pass-button">
              <OutlineButton
                text={'Submit'}
                type={'submit'}
                loading={isLoading}
                backgroundColor="transparent"
              />
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

// import { Box, Input, Text, Button, FormLabel } from '@chakra-ui/react'
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'

// export const ForgotPasswordForm = () => {
//   const [email, setEmail] = useState('')
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState(false)
//   const router = useRouter()

//   const mailObj = {
//     email,
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     console.log(email)
//     await fetch('/api/mail', {
//       method: 'POST',
//       body: JSON.stringify(mailObj),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }).then((res) => {
//       console.log(res.status)
//       if (res.status === 401) {
//         setError(true)
//         console.log(error)
//       } else {
//         setEmail('')
//         setSuccess(true)
//         setTimeout(() => {
//           router.push('/signin')
//         }, 3000)
//       }
//     })
//   }

//   return (
//     <>
//       {success ? (
//         <Box>
//           <Text>
//             Success! Check your email for a link to reset your password.
//           </Text>
//           <Text>You will now be redirected to the sign in page...</Text>
//         </Box>
//       ) : (
//         <Box>
//           <Text>Forgot Password</Text>
//           <form onSubmit={handleSubmit}>
//             <FormLabel>Email</FormLabel>
//             <Input type="email" onChange={(e) => setEmail(e.target.value)} />
//             <Button type="submit">Reset Password</Button>
//           </form>
//           {error && <Text>Error! User not found!</Text>}
//         </Box>
//       )}
//     </>
//   )
// }
