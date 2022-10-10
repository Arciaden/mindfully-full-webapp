import '../styles/globals.css'
import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
