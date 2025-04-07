import styled from 'styled-components'
import { breakpoints } from './breakpoints'
import colors from './colors'

export const TituloPrincipal = styled.h2`
  text-align: center;
  margin: 24px 0;
  font-size: 40px;
  font-weight: 900;
  color: ${colors.azulMarinho};

  @media (max-width: ${breakpoints.mobile}) {
    margin: 10px 0;
  }

  @media (max-width: ${breakpoints.mobileSmall}) {
    margin: 10px 0;
    font-size: 16px;
  }
`

export const TituloSecao = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.azulMarinho};
`
