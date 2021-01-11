import React, { useMemo } from 'react'
import { Ex1 } from './style'
import theme from '../theme'

function load_moon_phases(obj, callback) {
  const gets = []
  for (const i in obj) {
    gets.push(`${i}=${encodeURIComponent(obj[i])}`)
  }
  gets.push(`LDZ=${new Date(obj.year, obj.month - 1, 1) / 1000}`)
  const xmlhttp = new XMLHttpRequest()
  const url = `https://www.icalendar37.net/lunar/api/?${gets.join('&')}`
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(JSON.parse(xmlhttp.responseText))
    }
  }
  xmlhttp.open('GET', url, true)
  xmlhttp.send()
  return (<Ex1 id="ex1"></Ex1>)
}

function example_1(moon) {
  const day = new Date().getDate()
  const { dayWeek } = moon.phase[day]
  const html = `${'<div>'
    + '<b>'}${moon.nameDay[dayWeek]}</b>`
    + `<div>${day} <b>${moon.monthName}</b> ${
      moon.year}</div>`
    + `<div shadow>${moon.phase[day].svg}</div>`
    + `<div>${moon.phase[day].phaseName} `
    + `${(moon.phase[day].isPhaseLimit) ? '' : `${Math.round(moon.phase[day].lighting)}%`
    }</div>`
    + '</div>'
  document.getElementById('ex1').innerHTML = html
}
const configMoon = {
  lang: 'en',
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  size: 150,
  lightColor: 'rgb(255,255,210)',
  shadeColor: theme.colors.darkAccent,
  texturize: false,
}

const Moon = () =>{
    const moonMemo = useMemo(() => load_moon_phases(configMoon, example_1))
    return moonMemo
}

export default Moon
