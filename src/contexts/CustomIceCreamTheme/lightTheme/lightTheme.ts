import { light } from '@pancakeswap-libs/uikit'
import lightColors from './lightColor'

const icecreamLight = {
  ...light,
  colors: lightColors,
  card: {
    ...light.card,
    boxShadowActive: "0px 0px 0px 1px #a60303, 0px 0px 4px 8px rgba(166, 3, 3, 0.4)"
  },
  shadows: {
    ...light.shadows,
    focus: "0px 0px 0px 1px #a60303, 0px 0px 0px 4px rgba(166, 3, 3, 0.6)"
  },
  button: {
    ...light.button,
    primary: {
      ...light.button.primary,
      background: "#a60303",
      backgroundHover: "#e80505",
      backgroundActive: "#f54040"
    },
    secondary: {
      ...light.button.secondary,
      border: "2px solid #a60303",
      borderColorHover: "#e80505",
      color: "#a60303"
      // background: "#c9701c"
    },
    subtle: {
      ...light.button.subtle,
      background: "#c9701c",
      backgroundHover: "#e69345",
      backgroundActive: "#e69345"
    }
  }
}
export default icecreamLight;