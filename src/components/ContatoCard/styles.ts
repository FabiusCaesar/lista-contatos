import styled, { css } from 'styled-components'

interface CardProps {
  $selecionado: boolean
}

export const Card = styled.div<CardProps>`
  padding: 8px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ $selecionado }) =>
    $selecionado &&
    css`
      border: 2px solid #007bff;
      background-color: #e6f0ff;
    `}

  h3 {
    padding: 8px;
    margin-bottom: 8px;
  }

  p {
    margin: 8px 0;
  }
`
