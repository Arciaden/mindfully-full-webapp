import {
  Flex,
  Avatar,
  Text,
  Box,
  Button,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '../styles/clientCard.module.css'
import Link from 'next/link'

// Framer motion variants objects
const isExpanded = {
  expanded: { height: 240, transition: { duration: 0.5 } },
  closed: {
    height: 143,
    overflow: 'hidden',
    transition: { duration: 0.4 },
  },
}

const textEffect = {
  closedText: { opacity: 0, transition: { duration: 1 } },
  expandedText: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
}

const editCard = {
  edit: {
    transform: 'rotateY(180deg)',
    transition: { duration: 0.2 },
  },
  read: {},
}

const ClientCard = ({
  firstName,
  lastName,
  age,
  bio,
  email,
  phone,
  id,
  imageUrl,
}) => {
  const [expanded, setExpanded] = useState(false)
  const [edit, setEdit] = useState(false)

  //Edit Form State
  const [editFirstName, setEditFirstName] = useState(firstName)
  const [editLastName, setEditLastName] = useState(lastName)
  const [editAge, setEditAge] = useState(age)
  const [editBio, setEditBio] = useState(bio)
  const [editEmail, setEditEmail] = useState(email)
  const [editPhone, setEditPhone] = useState(phone)

  //Functions
  const toggleExpanded = () => {
    setExpanded((state) => !state)
  }

  const toggleEdit = () => {
    setEdit((state) => !state)
  }

  const cancelEdit = () => {
    setEdit((state) => !state)
    setEditFirstName(firstName)
    setEditLastName(lastName)
    setEditBio(bio)
    setEditEmail(email)
    setEditPhone(phone)
    setEditAge(age)
  }

  console.log(imageUrl)

  //Updating a client
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id,
      firstName: editFirstName,
      lastName: editLastName,
      age: editAge,
      email: editEmail,
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

  //Delete a client
  const handleDelete = () => {
    fetch(`${window.location.origin}/api/clientCRUD`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error)
        console.log(id)
      })
  }

  return (
    <motion.div
      className={styles.clientCardContainer}
      initial={'read'}
      animate={edit ? 'edit' : 'read'}
      variants={editCard}
    >
      {/* EDIT SIDE OF THE CARD */}
      {edit ? (
        <>
          <form onSubmit={handleSubmit} className="client-card-edit-form">
            <Flex
              lineHeight={6}
              mb="10px"
              transform={'rotateY(180deg)'}
              className="client-card-edit-name-container"
            >
              <Box
                mr="20px"
                position="relative"
                className="client-card-avatar-container"
              >
                <Avatar
                  name={
                    firstName.charAt(0).toUpperCase() +
                    ' ' +
                    lastName.charAt(0).toUpperCase()
                  }
                  size="lg"
                  src={imageUrl}
                />
              </Box>
              <Box>
                <Flex>
                  <Input
                    type="text"
                    value={editFirstName}
                    onChange={(e) => setEditFirstName(e.target.value)}
                    fontSize={12}
                    height={8}
                  />
                  <Input
                    type="text"
                    value={editLastName}
                    onChange={(e) => setEditLastName(e.target.value)}
                    fontSize={12}
                    height={8}
                    m="0 10px 10px 10px"
                  />
                  <Input
                    type="number"
                    min="18"
                    max="99"
                    value={editAge}
                    onChange={(e) => setEditAge(Number(e.target.value))}
                    fontSize={12}
                    height={8}
                  />
                </Flex>
                <Box fontWeight={500} mb="10px">
                  <Input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    fontSize={12}
                    height={8}
                  />
                </Box>
                <Input
                  type="tel"
                  value={editPhone}
                  onChange={(e) => setEditPhone(Number(e.target.value))}
                  fontSize={12}
                  height={8}
                />
              </Box>
            </Flex>

            <Flex
              fontWeight={400}
              color="#065666"
              transform="rotateY(180deg)"
              className="client-card-edit-bio-container"
            >
              <Box mr="15px">
                <Text>BIO:</Text>
              </Box>
              <Flex direction="column" width="100%">
                <Textarea
                  resize="none"
                  fontSize={12}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  mb="20px"
                />
                <Flex
                  width="100%"
                  justifyContent="space-evenly"
                  className="client-card-edit-buttons-container"
                >
                  <Button height={5} fontSize="text.xs" onClick={cancelEdit}>
                    Cancel
                  </Button>
                  <Button
                    height={5}
                    fontSize="text.xs"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    height={5}
                    fontSize="text.xs"
                    _hover={{ background: 'red.400', color: 'white' }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </form>
        </>
      ) : (
        // READ SIDE OF THE CARD
        <>
          <Flex lineHeight={6} mb="10px" position="relative">
            <Box mr="20px">
              <Avatar
                name={
                  firstName.charAt(0).toUpperCase() +
                  ' ' +
                  lastName.charAt(0).toUpperCase()
                }
                size="lg"
                src={imageUrl}
              />
            </Box>
            <Box>
              <Flex className="client-card-name-container">
                <Link href={`/userClients/${id}`}>
                  <a className="client-link">
                    <Text fontWeight={700} className="client-link-text">
                      {firstName.charAt(0).toUpperCase() +
                        firstName.slice(1) +
                        ' ' +
                        lastName.charAt(0).toUpperCase() +
                        lastName.slice(1)}{' '}
                      | {age} | Client
                    </Text>
                  </a>
                </Link>
              </Flex>
              <Box fontWeight={500} className="client-card-info-container">
                <Text>{email}</Text>
              </Box>
              <Box>{phone}</Box>
            </Box>
            <EditIcon
              aria-label="edit-button"
              position="absolute"
              top="0"
              right="0"
              _hover={{ cursor: 'pointer' }}
              onClick={toggleEdit}
            ></EditIcon>
          </Flex>

          <Flex
            fontWeight={400}
            color="#065666"
            className="client-card-bio-container"
          >
            <Box mr="15px">
              <Text>BIO:</Text>
            </Box>
            <Flex direction="column">
              {bio?.length > 300 && expanded === false ? (
                <motion.div
                  className="motion-div"
                  initial={'closed'}
                  animate={expanded ? 'expanded' : 'closed'}
                  variants={isExpanded}
                  layout
                >
                  {bio?.substring(0, 300)}...
                </motion.div>
              ) : (
                <motion.div
                  className="motion-div"
                  initial={'closed'}
                  animate={expanded ? 'expanded' : 'closed'}
                  variants={isExpanded}
                  layout
                >
                  <motion.p>
                    {bio?.substring(0, 300)}
                    <motion.span
                      initial={'closedText'}
                      animate={expanded ? 'expandedText' : 'closedText'}
                      variants={textEffect}
                    >
                      {bio?.length < 500 ? (
                        <span>{bio?.substring(300, 500)}</span>
                      ) : (
                        <>
                          <span>{bio?.substring(300, 500)}...</span>
                          <Link href={`/userClients/${id}`}>
                            <a
                              className="continue-reading-bio"
                              style={{ color: '#065666', fontWeight: '500' }}
                            >
                              {' '}
                              Read More
                            </a>
                          </Link>
                        </>
                      )}
                    </motion.span>
                  </motion.p>
                </motion.div>
              )}
              {bio?.length > 300 ? (
                <Box
                  as="button"
                  onClick={toggleExpanded}
                  backgroundColor="transparent"
                  textAlign="left"
                  fontWeight={700}
                  height="20px"
                  mt="5px"
                >
                  {expanded ? 'Read Less' : 'Continue Reading'}
                </Box>
              ) : (
                <Box height="20px" mt="5px"></Box>
              )}
            </Flex>
          </Flex>
        </>
      )}
    </motion.div>
  )
}

export default ClientCard
