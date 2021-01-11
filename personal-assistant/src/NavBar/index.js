import React from 'react'
import { Container, Float, Li } from './style'

const NavBar = () => (
    <Container>
        <ul>
            <Li><Float to='/'>Home</Float></Li>
            <Li><Float to='/Tasks'>Tasks</Float></Li>
        </ul>
    </Container>
)

export default NavBar