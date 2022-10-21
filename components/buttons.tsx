import { background, Button } from '@chakra-ui/react'
import { FC } from 'react'

//Style of this button is outlined On mobile it has a background of white for the sign in page.
//If we need to I will make a specific button for the login / signup pages

//Added typing to the button
export const OutlineButton = ({
  text,
  type,
  loading,
  backgroundColor,
  border,
  borderRadius,
  disabled,
}) => {
  return (
    <Button
      background={['white', 'white', 'transparent']}
      border={border}
      borderRadius={borderRadius}
      fontWeight="light"
      fontSize="text.s"
      width="160px"
      height="50px"
      _hover={{ border: 'borders.textInputActive' }}
      type={type}
      isLoading={loading}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
