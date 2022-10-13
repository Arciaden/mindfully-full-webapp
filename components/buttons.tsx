import { Button } from '@chakra-ui/react'

//Style of this button is outlined On mobile it has a background of white for the sign in page.
//If we need to I will make a specific button for the login / signup pages
export const OutlineButton = ({ text, type, loading }) => {
  return (
    <Button
      background={['white', 'white', 'transparent']}
      border="borders.softGray"
      fontWeight="light"
      width="125px"
      borderRadius="3px"
      _hover={{ backgroundColor: 'buttonHover.blue' }}
      type={type}
      isLoading={loading}
    >
      {text}
    </Button>
  )
}
