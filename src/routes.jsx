// import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
// import { LazyLoadable } from './common'
import { LandingPage } from './pages/LandingPage'
import { Dashboard } from './pages/Dashboard'

// TODO: finish this
// const { LandingPage } = LazyLoadable(lazy(() => import('./pages/LandingPage')))
// const { Dashboard } = LazyLoadable(lazy(() => import('./pages/Dashboard')))

export const ApplicationRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])
