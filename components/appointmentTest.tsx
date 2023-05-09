import { Input } from '@chakra-ui/react'
import { useState } from 'react'

const AppointmentTest = ({ title }) => {
  const [editTitle, setEditTitle] = useState(title)

  console.log(editTitle)
  return (
    <>
      <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
    </>
  )
}

export default AppointmentTest
