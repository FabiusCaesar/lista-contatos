import styled from 'styled-components'

export const MainContentLayout = styled.main`
  padding: 40px;
  height: 100vh;
  overflow-y: auto; // <-- apenas rolagem vertical
  overflow-x: hidden;
`

export const Contatos = styled.div`
  padding: 24px;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`
