import styled from 'styled-components'

export const Ex1 = styled.h2`    
    display: table;    
    margin:20px auto;
    text-align: center;    
    color:black;
    background-color: ${({theme}) => theme.colors.third};
    font-family: ${({theme}) => theme.font.body.family};
    color: ${({theme}) => theme.colors.darkAccent};
    padding: 5px 30px;
    `
