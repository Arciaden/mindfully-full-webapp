import { Button } from '@chakra-ui/react'
import { FC } from 'react'

//Style of this button is outlined On mobile it has a background of white for the sign in page.
//If we need to I will make a specific button for the login / signup pages

//Added typing to the button
export const OutlineButton: FC<{
  text: string
  type: 'submit' | 'button' | 'reset'
  loading: boolean
}> = ({ text, type, loading }) => {
  return (
    <Button
      background={['white', 'white', 'transparent']}
      border="borders.softGray"
      fontWeight="light"
      fontSize="text.md"
      width="160px"
      height="50px"
      borderRadius="3px"
      _hover={{ border: 'borders.textInputActive' }}
      type={type}
      isLoading={loading}
    >
      {text}
    </Button>
  )
}
