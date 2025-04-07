import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

const estilos = {
  primario: css`
    background-color: #007bff;
    color: ${colors.textoClaro};
    border: none;

    padding: 10px 20px;
    font-size: 16px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  `,
  primarioOutline: css`
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;

    padding: 10px 20px;
    font-size: 16px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
      border: 2px solid ${colors.azulMarinho};
      color: ${colors.textoClaro};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      color: #999;
      border-color: #ccc;
      cursor: not-allowed;
    }
  `,
  secundario: css`
    background-color: #007bff;
    color: ${colors.textoClaro};
    border: 2px solid #007bff;

    margin: 4px 8px;
    padding: 6px 12px;
    font-size: 14px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
      border: 2px solid ${colors.azulMarinho};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  `,
  remover: css`
    background-color: #dc3545;
    color: ${colors.textoClaro};
    border: none;

    margin: 4px 8px;
    padding: 6px 12px;
    font-size: 14px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  `,
  confirmar: css`
    background-color: transparent;
    color: #28a745;
    border: 2px solid #28a745;

    margin: 4px 8px;
    padding: 6px 12px;
    font-size: 14px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
      border: 2px solid ${colors.azulMarinho};
      color: ${colors.textoClaro};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      color: #999;
      border-color: #ccc;
      cursor: not-allowed;
    }
  `,
  cancelar: css`
    background-color: transparent;
    color: #dc3545;
    border: 2px solid #dc3545;

    margin: 4px 8px;
    padding: 6px 12px;
    font-size: 14px;

    &:hover:not(:disabled) {
      background-color: ${colors.azulMarinho};
      border: 2px solid ${colors.azulMarinho};
      color: ${colors.textoClaro};
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      color: #999;
      border-color: #ccc;
      cursor: not-allowed;
    }
  `
}

const StyledButton = styled.button<{ variante: keyof typeof estilos }>`
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  ${(props) => estilos[props.variante]}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
`

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: keyof typeof estilos
  children: React.ReactNode
}

const Botao: React.FC<BotaoProps> = ({
  variante = 'primario',
  children,
  ...rest
}) => {
  return (
    <StyledButton variante={variante} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Botao
