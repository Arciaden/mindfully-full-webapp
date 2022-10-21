import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/300.css'

import '../styles/globals.css'
import React from 'react'
import Theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={Theme}>
      <NavigationBar>
        <Component {...pageProps} />
      </NavigationBar>
    </ChakraProvider>
  )
}

export default MyApp
