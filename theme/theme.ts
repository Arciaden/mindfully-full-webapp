// Global Style Overrides
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
  colors: {
    brand: {
      100: '#E2FFFF',
      200: '#C4FFFF',
      300: '#A5F5FF',
      400: '#87D9FF',
      500: '#67BDFF',
      600: '#45A2E8',
      700: '#1488CC',
      overlay: 'rgba(2, 95, 198, 0.6)',
    },
  },
  borders: {
    borders: {
      softGray: '1px solid #e2e8f0',
      textInputActive: '1px solid #025FC6',
    },
  },
  Button: {
    buttonHover: {
      blue: 'rgba(68, 165, 225, 0.2)',
    },
  },
  fontSizes: {
    text: {
      xxxl: '3.052rem',
      xxl: '2.441rem',
      xl: '1.953rem',
      lg: '1.563rem',
      md: '1.25rem',
      sm: '1rem',
      xs: '0.8rem',
      xxs: '0.64rem',
      xxxs: '0.512rem',
    },
  },
})

export default theme