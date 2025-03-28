import styled from 'styled-components'

export const Painel = styled.aside`
  margin-left: 16px;
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f9f9f9;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto; /* Permite scroll interno se o conteúdo exceder a altura */
`
