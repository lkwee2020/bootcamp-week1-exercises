import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    padding: 10px;
    width: 100%;
    font-family: ${({theme}) => theme.font.body.family};
    color: ${({theme}) => theme.colors.darkAccent};
    background-color: ${({theme}) => theme.colors.third};
`

export const BigDiv = styled.div`
    height:100%
`
