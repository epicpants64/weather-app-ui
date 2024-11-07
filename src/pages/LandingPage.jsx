import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'

import { setLocation, errorSettingLocation, useDestination } from '../context/destinationContext'
import { useCurrentLocationInfoQuery } from '../cache/useCurrentLocationInfoQuery'
import { Loader } from '../common/Loader'
import { ZipCodeInput } from '../common/ZipCodeInput'
import { CenterItemsContainer, CenterItemsSubContainer } from './styles'

export const LandingPage = () => {
  const [shouldQueryLocation, setShouldQueryLocation] = useState(false)
  const { dispatch, settingDestination, selectedDestination, zipCode, setIsValidZipCode } = useDestination()
  const { data, isError } = useCurrentLocationInfoQuery({ zipCode, shouldQuery: shouldQueryLocation })
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      setIsValidZipCode(false)
      setShouldQueryLocation(false)
      errorSettingLocation({ dispatch })
      navigate('/')
    }
  }, [isError])

  useEffect(() => {
    if (data) {
      setLocation({ dispatch, currentLocation: data })
      navigate('/dashboard')
      setShouldQueryLocation(false)
    }
  }, [data])

  useEffect(() => {
    if (zipCode && !selectedDestination) setShouldQueryLocation(true)
  }, [zipCode])

  return (
    <>
      {settingDestination ? (
        <CenterItemsContainer>
          <CenterItemsSubContainer>
            <Loader />
          </CenterItemsSubContainer>
        </CenterItemsContainer>
      ) : (
        <CenterItemsContainer>
          <CenterItemsSubContainer>
            <Typography variant='h1'>Please input a valid US ZIP code</Typography>
            <ZipCodeInput />
          </CenterItemsSubContainer>
        </CenterItemsContainer>
      )}
    </>
  )
}
