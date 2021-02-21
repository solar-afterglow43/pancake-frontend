import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import icecreamDark  from './CustomIceCreamTheme/darkTheme/darkTheme'
import icecreamLight  from './CustomIceCreamTheme/lightTheme/lightTheme'

// import { light, dark, lightColors } from '@pancakeswap-libs/uikit'

console.log('=== icecreamLight', icecreamLight)
console.log('=== icecreamDark', icecreamDark)

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? icecreamDark : icecreamLight}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
