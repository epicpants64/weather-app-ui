import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/styled-engine-sc'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'
import { ApplicationRoutes } from './routes'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <RouterProvider router={ApplicationRoutes} />
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>
)
