import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    padding: 10px;
    font-family: ${({theme}) => theme.font.body.family};
    color: ${({theme}) => theme.colors.third};
    background-color: ${({theme}) => theme.colors.accent};
`
export const Float = styled(Link)`
    float: left;
    width: 100px;
    color: ${({theme}) => theme.colors.third};
    text-decoration: none;
    font-weight: 450;

    &:hover {
        color: ${({theme}) => theme.colors.darkAccent};
    }
`

export const Li = styled.li`
    display: inline;
`

