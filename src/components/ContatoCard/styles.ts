import styled, { css } from 'styled-components'
import '@fontsource/roboto-mono' // Fonte monoespaçada para modo de edição
import colors from '../../styles/colors'

interface CardProps {
  $selecionado: boolean
}

export const Card = styled.div<CardProps>`
  padding: 8px;
  background-color: ${colors.fundo};
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ $selecionado }) =>
    $selecionado &&
    css`
      border: 2px solid ${colors.azulPrincipal};
      background-color: ${colors.azulCardSelect};
    `}

  h3 {
    padding: 8px;
    margin-bottom: 8px;
  }

  p {
    margin: 8px 0;
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.cinzaIntermediario};
  padding: 4px;
  margin: 4px 0;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  text-align: center;
  font-family: 'Roboto Mono';

  &:focus {
    border-color: ${colors.azulPrincipal};
  }
`
