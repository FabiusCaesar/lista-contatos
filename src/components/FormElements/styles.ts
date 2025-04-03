import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%; /* <- Adicionado para evitar que inputs "estourem" */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Label = styled.label`
  min-width: 80px;
  font-weight: bold;
`

export const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff; /* Cor de foco */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Efeito de foco */
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  justify-content: flex-start;
  gap: 2.5%; /* Espaço entre os campos proporcional à altura do pai */
  padding: 5%; /* Padding interno também proporcional */
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2%;
  margin-bottom: 4%;
`
