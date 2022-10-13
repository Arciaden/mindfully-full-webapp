//Main Theme Entrypoint
import { extendTheme } from '@chakra-ui/react'
import { colors, fontSizes } from './styles'
import { borders } from './foundations/borders'

const overrides = {
  colors,
  fontSizes,
  borders,
}

export default extendTheme(overrides)
