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
  grid-template-columns: 300px 1fr; /* Painel Lateral fixo + espaço restante para ListaContatos */
  height: 100vh;
  overflow: hidden; /* Evita scroll no container principal */
  background-color: #f9f9f9;
`

export default EstiloGlobal
