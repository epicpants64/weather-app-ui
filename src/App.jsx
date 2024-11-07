import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast'

import { DestinationProvider } from './context/destinationContext/destinationContext'
// import { useNotification } from './hooks/useNotification'
// import { NOTIFICATION_TYPES } from './constants/notificationTypes'

export const App = () => {
  // const [errorMessage] = useNotification(NOTIFICATION_TYPES.ERROR)

  // catch all for react query errors
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        toast.error(`Something went wrong: ${error.message}`)
      }
    })
  })
  return (
    <QueryClientProvider client={queryClient}>
      <DestinationProvider>
        <Toaster
          //  TODO: move this config to a sep file and spread here to keep cleaner
          position='top-right'
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            className: '',
            duration: 6000,
            style: {
              background: '#363636',
              color: '#fff'
            },
            // update styling for 2 main types of toast
            success: {
              style: {
                background: 'green',
                color: 'white'
              }
            },
            error: {
              style: {
                background: 'red',
                color: 'white'
              }
            }
          }}
        />
        <Outlet />
      </DestinationProvider>
    </QueryClientProvider>
  )
}
