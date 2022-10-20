import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'

import '../styles/globals.css'
import React from 'react'
import Theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
