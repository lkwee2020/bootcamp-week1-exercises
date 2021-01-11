import styled from 'styled-components'

export const FancyButton = styled.button`
  background: ${({theme}) => theme.colors.accent};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: ${({theme}) => theme.font.body.family};
  font-weight: bold;
  &:hover {
    color: ${({theme}) => theme.colors.third};
  }
`
