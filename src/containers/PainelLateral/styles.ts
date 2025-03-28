import styled from 'styled-components'

export const Painel = styled.aside`
  width: 300px;
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

export const FieldGroup = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente label e input */
  gap: 1rem; /* Espaço entre o label e o input */
  width: 100%; /* Garante que o grupo ocupe toda a largura disponível */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
  margin-bottom: 64px;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`

export const Input = styled.input`
  flex: 1; /* Faz o input ocupar o restante do espaço */
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 16px;
  outline: none;

  &:focus {
    border-color: #007bff; /* Cor de foco */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Efeito de foco */
  }
`
