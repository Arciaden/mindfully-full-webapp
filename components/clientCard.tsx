import {
  Flex,
  Stack,
  Avatar,
  Heading,
  Text,
  Box,
  Button,
} from '@chakra-ui/react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const isExpanded = {
  expanded: { height: 240, transition: { duration: 0.5 } },
  closed: {
    height: 100,
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

const ClientCard = ({ firstName, lastName, age, bio, email, phone, id }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => {
    setExpanded((state) => !state)
  }

  console.log(expanded)

  return (
    <Box
      width="100%"
      p="21px"
      fontSize="text.xs"
      color="#086F83"
      borderRadius="4px"
      background="linear-gradient(0deg, #2F80ED -45%, rgba(235, 248, 255, 0.47) 63.75%, #FAFDFF 99.24%)"
      box-shadow="3px 4px 7px rgba(0, 0, 0, 0.25)"
      overflow="hidden"
    >
      <Flex lineHeight={6} mb="10px">
        <Box mr="20px">
          <Avatar
            name={firstName + ' ' + lastName}
            size="lg"
            src="https://res.cloudinary.com/deveraux-design/image/upload/v1667011530/Mindfully%20Full/seinfeld_teftvl.jpg"
          />
        </Box>
        <Box>
          <Flex>
            <Text fontWeight={700}>
              {firstName + ' ' + lastName} | {age} | Client
            </Text>
          </Flex>
          <Box fontWeight={500}>
            <Text>{email}</Text>
          </Box>
          <Box>{phone}</Box>
        </Box>
      </Flex>

      <Flex fontWeight={400} color="#065666">
        <Box mr="15px">
          <Text>BIO:</Text>
        </Box>
        <Flex direction="column">
          {bio.length > 250 && expanded === false ? (
            <motion.div
              className="motion-div"
              initial={'closed'}
              animate={expanded ? 'expanded' : 'closed'}
              variants={isExpanded}
              layout
            >
              {bio.substring(0, 200)}...
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
                {bio.substring(0, 200)}
                <motion.span
                  initial={'closedText'}
                  animate={expanded ? 'expandedText' : 'closedText'}
                  variants={textEffect}
                >
                  {bio.substring(200, 500)}
                </motion.span>
              </motion.p>
            </motion.div>
          )}
          {bio.length > 250 ? (
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
            <Box height="20px"></Box>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default ClientCard
