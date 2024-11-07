import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '90px',
      margin: 0
    },
    h2: {
      fontSize: '30px',
      fontWeight: 400,
      margin: 0
    },
    h3: {
      fontSize: '22px',
      margin: 0
    }
  }
})
