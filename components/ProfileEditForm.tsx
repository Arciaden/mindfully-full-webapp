import {
  GridItem,
  Heading,
  Input,
  Textarea,
  FormLabel,
  Button,
  Grid,
  FormControl,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { OutlineButton } from '../components/buttons'

const ProfileEditForm = ({
  firstName,
  lastName,
  age,
  bio,
  email,
  phone,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [editFirstName, setEditFirstName] = useState(firstName)
  const [editLastName, setEditLastName] = useState(lastName)
  const [editAge, setEditAge] = useState(age)
  const [editBio, setEditBio] = useState(bio)
  const [editEmail, setEditEmail] = useState(email)
  const [editPhone, setEditPhone] = useState(phone)

  useEffect(() => {
    setCount(editBio.length)
  })

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const formData = {
      id: id,
      firstName: editFirstName,
      lastName: editLastName,
      age: editAge,
      phone: editPhone,
      email: editEmail,
      bio: editBio,
    }

    fetch(`${window.location.origin}/api/userCRUD`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log('User Updated')
        setIsLoading(false)
        return res.json()
      })
      .catch((error) => error)
  }

  return (
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
            {/* Account Settings */}
            {/* <GridItem colStart={1} colEnd={6}>
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
            <GridItem colStart={1} colEnd={10}>
              <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                Password
              </FormLabel>
              <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                Current Password
              </FormLabel>
              <Input type="password" mb="10px"></Input>
              <FormLabel mb="8px" fontSize="text.md" fontWeight="normal">
                New Password
              </FormLabel>
              <Input type="password"></Input>
            </GridItem> */}
          </Grid>
        </form>
      </GridItem>
    </>
  )
}

export default ProfileEditForm
