import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 20%) auto;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
