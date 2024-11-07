import { createContext, useContext, useMemo, useReducer, useState } from 'react'
import { initState } from './constants'
import { reducer } from './destination.reducer'

const DestinationContext = createContext()

export const useDestination = () => {
  const context = useContext(DestinationContext)
  if (!context) {
    throw new Error('please call within a LocationProvider')
  }
  return context
}
export const DestinationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const [zipCode, setZipCode] = useState('')
  const [isValidZipCode, setIsValidZipCode] = useState(false)

  const returnValues = useMemo(
    () => ({
      dispatch,
      zipCode,
      setZipCode,
      isValidZipCode,
      setIsValidZipCode,
      ...state
    }),
    [state]
  )
  return <DestinationContext.Provider value={returnValues} {...props} />
}
