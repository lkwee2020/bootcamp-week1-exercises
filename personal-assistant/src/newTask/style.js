import styled from 'styled-components'

export const Container = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    text-align: center;
    margin: auto;
    padding: 10px;
    font-family: ${({theme}) => theme.font.body.family};
    color: ${({theme}) => theme.colors.darkAccent};
    background-color: ${({theme}) => theme.colors.third};
`
