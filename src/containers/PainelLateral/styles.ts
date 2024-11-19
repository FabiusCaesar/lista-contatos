import styled from 'styled-components'

export const Painel = styled.aside`
  padding: 16px;
  height: 100vh;
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
  margin-right: 8px;
`

export const Input = styled.input`
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
