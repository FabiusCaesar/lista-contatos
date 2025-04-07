import { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #fff;
  }
`

export default GlobalStyle

export * from './typography'
export * from './layout'
