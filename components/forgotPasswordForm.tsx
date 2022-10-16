import { Box, Input, Text, Button, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
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
      setEmail('')
    })
  }

  return (
    <Box>
      <Text>Forgot Password</Text>
      <form onSubmit={handleSubmit}>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit">Reset Password</Button>
      </form>
    </Box>
  )
}
