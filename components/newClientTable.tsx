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
            user?.clients?.slice(0, 5).map((client) => (
              <Tr key={client.id}>
                <Td>
                  {client.firstName} {client.lastName}
                </Td>
                <Td>{client.age}</Td>
                <Td>{client.createdAt}</Td>
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
