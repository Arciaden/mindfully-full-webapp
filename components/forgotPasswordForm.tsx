import { Box, Input, Text, Button, FormLabel } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const mailObj = {
    email,
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email)
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(mailObj),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res.status)
      if (res.status === 401) {
        setError(true)
        console.log(error)
      } else {
        setEmail('')
        setSuccess(true)
        setTimeout(() => {
          router.push('/signin')
        }, 3000)
      }
    })
  }

  return (
    <>
      {success ? (
        <Box>
          <Text>
            Success! Check your email for a link to reset your password.
          </Text>
          <Text>You will now be redirected to the sign in page...</Text>
        </Box>
      ) : (
        <Box>
          <Text>Forgot Password</Text>
          <form onSubmit={handleSubmit}>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <Button type="submit">Reset Password</Button>
          </form>
          {error && <Text>Error! User not found!</Text>}
        </Box>
      )}
    </>
  )
}
