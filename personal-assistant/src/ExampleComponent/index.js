import React from 'react'
import { FancyButton } from './styles'

const ExampleComponent = ({ buttonText, action }) => (
  <FancyButton onClick={action}>{buttonText}</FancyButton>
)

export default ExampleComponent
