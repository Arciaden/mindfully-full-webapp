import {
  Box,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Avatar,
  Text,
  Input,
  Button,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import { CloseIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const ClientDetailsInformation = ({
  firstName,
  lastName,
  age,
  phone,
  bio,
  email,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [edit, setEdit] = useState(false)
  const [count, setCount] = useState(0)
  const [editFirstName, setEditFirstName] = useState(firstName)
  const [editLastName, setEditLastName] = useState(lastName)
  const [editAge, setEditAge] = useState(age)
  const [editBio, setEditBio] = useState(bio)
  const [editEmail, setEditEmail] = useState(email)
  const [editPhone, setEditPhone] = useState(phone)

  const toggleEdit = () => {
    setEdit((state) => !state)
  }

  //Updating a client
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id,
      firstName: editFirstName.toLowerCase(),
      lastName: editLastName.toLowerCase(),
      age: editAge,
      email: editEmail.toLowerCase(),
      phone: editPhone,
      about: editBio,
    }

    fetch(`${window.location.origin}/api/clientCRUD`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log('Client Updated!')
        return res.json()
      })
      .catch((error) => error)

    setEdit((state) => !state)
  }

  return (
    <Box
      className="client-profile-content-container"
      p="20px 50px 20px 50px"
      overflow="scroll"
      h="560px"
    >
      <Grid templateColumns="repeat(9, 1fr)" columnGap={3} alignItems="center">
        {/* Avatar and Name */}
        <GridItem justifySelf="center">
          <Avatar
            name={firstName + ' ' + lastName}
            size="xl"
            src="https://res.cloudinary.com/deveraux-design/image/upload/v1679353585/pexels-chloe-1043471_ktlxyj.jpg"
            mr="15px"
          />
        </GridItem>
        <GridItem colSpan={7}>
          <Heading fontSize="text.xxl" fontWeight="normal" as="h2">
            {firstName?.slice(0, 1).toUpperCase() +
              firstName?.slice(1) +
              ' ' +
              lastName?.slice(0, 1).toUpperCase() +
              lastName?.slice(1)}
          </Heading>
        </GridItem>
        <GridItem colStart={9}>
          <IconButton
            aria-label="edit-button"
            boxSize={5}
            backgroundColor="transparent"
            _active={{ backgroundColor: 'transparent' }}
            _hover={{ cursor: 'pointer' }}
            onClick={toggleEdit}
            icon={edit ? <CloseIcon /> : <EditIcon />}
          ></IconButton>
        </GridItem>
        {edit ? (
          <>
            {/* Need to code loading spinner, visual indicator on success or failure of the update */}
            <GridItem colStart={2} colEnd={9}>
              <form>
                <Grid columnGap={5}>
                  {/* Personal Information */}
                  <GridItem colStart={1} colEnd={6}>
                    <FormLabel
                      as="h3"
                      fontSize="text.lg"
                      fontWeight="500"
                      borderBottom="1px solid #f0f0f0"
                      mb="20px"
                      pb="8px"
                    >
                      Personal Information
                    </FormLabel>
                  </GridItem>
                  <GridItem
                    colStart={9}
                    colEnd={10}
                    display="inline-grid"
                    alignSelf="start"
                    justifySelf="end"
                  >
                    <Button
                      colorScheme="blue"
                      w="125px"
                      h="40px"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  </GridItem>
                  <GridItem colStart={1} colEnd={4}>
                    <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                      First Name
                    </FormLabel>
                    <Input
                      type="text"
                      value={editFirstName}
                      onChange={(e) => setEditFirstName(e.target.value)}
                    ></Input>
                  </GridItem>
                  <GridItem colStart={4} colEnd={7}>
                    <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                      Last Name
                    </FormLabel>
                    <Input
                      type="text"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                    ></Input>
                  </GridItem>
                  <GridItem colStart={7} colEnd={10}>
                    <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                      Age
                    </FormLabel>
                    <Input
                      type="text"
                      value={editAge}
                      onChange={(e) => setEditAge(Number(e.target.value))}
                    ></Input>
                  </GridItem>
                  <GridItem colStart={1} colEnd={10}>
                    <FormLabel
                      mb="8px"
                      fontSize="text.md"
                      mt="10px"
                      fontWeight="normal"
                    >
                      About Me
                    </FormLabel>
                    <Textarea
                      maxLength={1000}
                      rows={6}
                      value={editBio}
                      mb="10px"
                      onChange={(e) => {
                        setEditBio(e.target.value)
                        setCount(e.target.value.length)
                      }}
                    ></Textarea>
                  </GridItem>
                  <GridItem colStart={9} justifySelf="end">
                    <p>{count} / 1000</p>
                  </GridItem>
                  {/* Contact Information */}
                  <GridItem colStart={1} colEnd={6}>
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
                  <GridItem colStart={1} colEnd={5}>
                    <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                      Phone
                    </FormLabel>
                    <Input
                      type="tel"
                      value={editPhone}
                      onChange={(e) => setEditPhone(Number(e.target.value))}
                    ></Input>
                  </GridItem>
                  <GridItem colStart={5} colEnd={9}>
                    <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    ></Input>
                  </GridItem>
                </Grid>
              </form>
            </GridItem>
          </>
        ) : (
          <>
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
              <Text>
                {firstName?.slice(0, 1).toUpperCase() + firstName?.slice(1)}
              </Text>
            </GridItem>
            <GridItem colStart={5} colEnd={8}>
              <Text mb="8px" fontSize="text.md" fontWeight="normal">
                Last Name
              </Text>
              <Text>
                {lastName?.slice(0, 1).toUpperCase() + lastName?.slice(1)}
              </Text>
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
          </> // Client info
        )}
      </Grid>
    </Box>
  )
}

export default ClientDetailsInformation
