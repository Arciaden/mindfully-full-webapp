import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'

import '../styles/globals.css'
import React from 'react'
import Theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation'

import { StoreProvider } from 'easy-peasy'
import { clientStore } from '../lib/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={clientStore}>
      <ChakraProvider theme={Theme}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <NavigationBar>
            <Component {...pageProps} />
          </NavigationBar>
        )}
      </ChakraProvider>
    </StoreProvider>
  )
}

export default MyApp
