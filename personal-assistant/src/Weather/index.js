import React, { useState, useEffect } from 'react'
import { Container } from './style'

const Weather = () => {
  const [weather, setWeather] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
      const data = await res.json()
      setWeather(data.weather[0].description)
    }
    fetchData()
  }, [])

  return (
    <Container>Today's weather: {weather}</Container>
  )
}

export default Weather
