import { GridItem, Heading, Text, SkeletonText } from '@chakra-ui/react'
import { useState } from 'react'

const ProfileInformation = ({
  firstName,
  lastName,
  age,
  bio,
  email,
  phone,
}) => {
  return (
    <>
      {/* Personal Information */}
      <GridItem colStart={2} colEnd={6}>
        <Heading
          as="h3"
          fontSize="text.lg"
          fontWeight="500"
          borderBottom="1px solid #f0f0f0"
          mb="20px"
          pb="8px"
        >
          Personal Information
        </Heading>
      </GridItem>
      <GridItem colStart={2} colEnd={5}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          First Name
        </Text>
        <Text>{firstName}</Text>
      </GridItem>
      <GridItem colStart={5} colEnd={8}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          Last Name
        </Text>
        <Text>{lastName}</Text>
      </GridItem>
      <GridItem colStart={8} colEnd={10}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          Age
        </Text>
        <Text>{age}</Text>
      </GridItem>
      <GridItem colStart={2} colEnd={9}>
        <Text mb="8px" fontSize="text.md" mt="10px" fontWeight="normal">
          About Me
        </Text>
        <Text>{bio}</Text>
      </GridItem>
      {/* Contact Information */}
      <GridItem colStart={2} colEnd={6}>
        <Heading
          as="h3"
          fontSize="text.lg"
          fontWeight="500"
          borderBottom="1px solid #f0f0f0"
          m="20px 0 20px 0"
          pb="8px"
        >
          Contact Information
        </Heading>
      </GridItem>
      <GridItem colStart={2} colEnd={6}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          Phone
        </Text>
        <Text>{phone}</Text>
      </GridItem>
      <GridItem colStart={6} colEnd={10}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          Email
        </Text>
        <Text>{email}</Text>
      </GridItem>
      {/* Account Settings */}
      {/* <GridItem colStart={2} colEnd={6}>
        <Heading
          as="h3"
          fontSize="text.lg"
          fontWeight="normal"
          borderBottom="1px solid #f0f0f0"
          m="20px 0 20px 0"
          pb="8px"
        >
          Account Settings
        </Heading>
      </GridItem>
      <GridItem colStart={2} colEnd={10}>
        <Text mb="8px" fontSize="text.md" fontWeight="normal">
          Password
        </Text>
        <Text>**************</Text>
      </GridItem> */}
    </>
  )
}

export default ProfileInformation
