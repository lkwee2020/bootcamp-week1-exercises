import styled from 'styled-components'

export const Container = styled.h3`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: auto;
    padding: 10px;
    font-family: ${({theme}) => theme.font.body.family};
    color: ${({theme}) => theme.colors.darkAccent};
    background-color: ${({theme}) => theme.colors.third};
`
