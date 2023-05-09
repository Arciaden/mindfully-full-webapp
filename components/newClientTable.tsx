import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { useProfile } from '../lib/hooks'

const NewClientTable = () => {
  const { user, isLoading } = useProfile()
  return (
    <TableContainer
      border="1px solid #f0f0f0"
      borderRadius="10px"
      boxShadow="0 2px 5px #f0f0f0"
    >
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Join Date</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {user &&
            user?.clients
              ?.slice(0, 5)
              .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
              .reverse()
              .map((client) => (
                <Tr key={client.id}>
                  <Td>
                    {client.firstName.slice(0, 1).toUpperCase() +
                      client.firstName.slice(1)}{' '}
                    {client.lastName.slice(0, 1).toUpperCase() +
                      client.lastName.slice(1)}
                  </Td>
                  <Td>{client.age}</Td>
                  <Td>{DateTime.fromISO(client.createdAt).toLocaleString()}</Td>
                  <Td>
                    <Link href={`/userClients/${client.id}`}>View Client</Link>
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default NewClientTable
