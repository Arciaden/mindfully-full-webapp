import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const ClientPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [client, setClient] = useState()

  //Replace this with the useClient Hook once I figure out how to
  //This will give us caching etc.
  const getClient = async () => {
    await axios
      .post(`${window.location.origin}/api/getClient/${id}`, {
        id: id,
      })
      .then((res) => setClient(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    id ? getClient() : null
  }, [id])

  return (
    <Box>
      <Heading>
        {/* I'm not sure why there is an error here but since I will be refactoring the way that we are fetching data for this page
        just ignore the error for now as the data is fetching properly. I'm just doing this so that I know the API endpoint is doing what we need
        and so we have data to build the UI for the page. */}
        {client?.firstName} {client?.lastName}
      </Heading>
      <Text>{client?.age}</Text>
      <Text>{client?.phone}</Text>
      <Text>{client?.email}</Text>
      <Text>{client?.about}</Text>
    </Box>
  )
}

export default ClientPage
