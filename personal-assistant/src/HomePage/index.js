import React from 'react'
import Weather from '../Weather'
import Moon from '../Moon'
import { Container, BigDiv } from './style'

const HomePage = () => 
    <Container>
    <h1>Welcome!</h1>
    <Moon />  
    <Weather />
    </Container>

export default HomePage