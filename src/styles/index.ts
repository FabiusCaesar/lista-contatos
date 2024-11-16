import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin-top: 24px;
`

export default EstiloGlobal
