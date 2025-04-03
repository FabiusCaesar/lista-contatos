import styled from 'styled-components'
import { breakpoints } from './breakpoints'

export const TituloPrincipal = styled.h2`
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 10px 0;
  }
`

export const TituloSecao = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #555;
`
