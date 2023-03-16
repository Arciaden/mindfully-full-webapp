import {
  Box,
  Flex,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  InputGroup,
  InputLeftElement,
  DrawerFooter,
  Button,
} from '@chakra-ui/react'

import { PhoneIcon } from '@chakra-ui/icons'

// Needs to have an API route written to create the client
const CreateClientForm = ({ onClose }) => {
  return (
    <>
      <FormControl position="relative" h="100%" overflow="hidden">
        <Box margin="12px 0 12px 0">
          <FormLabel>First Name</FormLabel>
          <Input />
        </Box>
        <Box marginBottom="12px">
          <FormLabel>Last Name</FormLabel>
          <Input />
        </Box>

        <Box>
          <FormLabel>Age</FormLabel>
          <NumberInput marginBottom="12px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box marginBottom="12px">
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="phone number" />
          </InputGroup>
        </Box>
        <Box marginBottom="12px">
          <FormLabel>Email</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>Bio</FormLabel>
          <Textarea></Textarea>
        </Box>
        <Flex justifyContent="left" position="absolute" bottom="2%" left="0">
          <Button variant="outline" mr={3} w="150px" h="45px" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" w="150px" h="45px" onClick={onClose}>
            Save
          </Button>
        </Flex>
      </FormControl>
    </>
  )
}
export default CreateClientForm
