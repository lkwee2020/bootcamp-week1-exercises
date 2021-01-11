import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Open Sans Condensed:300,700', 'sans-serif'],
  },
})

const theme = {
  colors: {
    background: '#ffffff',
    second: '#e1e5f2',
    third: '#bfdbf7',
    accent: '#1f7a8c',
    darkAccent: '#022b3a',
  },
  font: {
    head: {
      family: 'Open Sans Condensed',
      weight: 700,
    },
    body: {
      family: 'Open Sans Condensed',
      weight: 400,
    },
  },
}

export default theme
