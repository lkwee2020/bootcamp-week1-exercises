import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import NavBar from './NavBar'
import HomePage from './HomePage'
import TaskPage from './TaskPage'


const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Switch>
        <Route path='/Tasks' component={TaskPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
