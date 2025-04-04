import styled, { css } from 'styled-components'

interface CardProps {
  $selecionado: boolean
}

export const Card = styled.div<CardProps>`
  padding: 8px;
  background-color: #f9f9f9;
  border: 2px solid transparent;
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

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 4px;
  margin: 4px 0;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  text-align: center;

  &:focus {
    border-color: #007bff;
  }
`

export const Button = styled.button`
  margin: 4px 8px;
  padding: 6px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
