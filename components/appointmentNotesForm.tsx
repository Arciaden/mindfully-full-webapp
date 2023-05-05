import { Flex, Heading, Text } from '@chakra-ui/react'

const AppointmentNotesForm = ({ title, type, duration, description }) => {
  return (
    <>
      <Flex justifyContent="space-between" mb="20px">
        <Flex flexDirection="column" w="32%">
          <Heading
            as="h3"
            fontSize="text.xl"
            fontWeight="normal"
            borderBottom="1px solid #e6e6e6"
            pb="5px"
            w="75%"
          >
            Title
          </Heading>
          <Text pt="5px" pl="5px" fontSize="text.md">
            {title}
          </Text>
        </Flex>
        <Flex flexDirection="column" w="32%">
          <Heading
            as="h3"
            fontSize="text.xl"
            fontWeight="normal"
            borderBottom="1px solid #e6e6e6"
            pb="5px"
            w="75%"
          >
            Type
          </Heading>
          <Text pt="5px" pl="5px" fontSize="text.md">
            {type}
          </Text>
        </Flex>
        <Flex flexDirection="column" w="32%">
          <Heading
            as="h3"
            fontSize="text.xl"
            fontWeight="normal"
            borderBottom="1px solid #e6e6e6"
            pb="5px"
            w="75%"
          >
            Duration
          </Heading>
          {duration >= 3601 ? (
            <Text pt="5px" ml="5px" fontSize="text.md">
              {Math.floor(duration / 3600)} Hours
            </Text>
          ) : (
            <Text pt="5px" pl="5px" fontSize="text.md">
              {Math.floor(duration / 60)} Minutes
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Heading
          as="h3"
          fontSize="text.xl"
          fontWeight="normal"
          borderBottom="1px solid #e6e6e6"
          w="75%"
          pb="5px"
        >
          Description
        </Heading>
        <Text pt="5px" pl="5px" fontSize="text.md">
          {description}
        </Text>
      </Flex>
    </>
  )
}

export default AppointmentNotesForm
