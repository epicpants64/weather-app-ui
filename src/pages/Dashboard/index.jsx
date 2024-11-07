import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { CurrentForecast } from './components/CurrentForecast'
import { HourlyList } from './components/HourlyList'
import { WeekList } from './components/WeekList'
import { Loader } from '../../common/Loader'
import { ZipCodeInput } from '../../common/ZipCodeInput'
import { useDestination, errorSettingLocation, setLocation } from '../../context/destinationContext'
import { useAllForecastInfoQuery } from '../../cache/useAllForecastInfoQuery'
import { useCurrentLocationInfoQuery } from '../../cache/useCurrentLocationInfoQuery'
import { CenterItemsContainer, CenterItemsSubContainer } from '../styles'
import { ForecastPageContainer } from './styles'

export const Dashboard = () => {
  const { dispatch, settingDestination, setIsValidZipCode, selectedDestination, zipCode, setZipCode } = useDestination()
  const [shouldQueryLocation, setShouldQueryLocation] = useState(false)
  const [shouldQuery, setShouldQuery] = useState(false)
  const navigate = useNavigate()
  const { isPending, isError, data } = useAllForecastInfoQuery({
    filter: { lon: selectedDestination?.lon, lat: selectedDestination?.lat },
    shouldQuery
  })
  const { data: locationData, error: locationError } = useCurrentLocationInfoQuery({ zipCode, shouldQuery: shouldQueryLocation })

  // these 2 use effects are the same as in landing page should be able to centralize
  useEffect(() => {
    if (locationError) {
      setIsValidZipCode(false)
      setShouldQueryLocation(false)
      errorSettingLocation({ dispatch })
      setZipCode('')
      navigate('/')
    }
  }, [locationError])

  useEffect(() => {
    if (locationData && !selectedDestination) {
      setLocation({ dispatch, currentLocation: data })
      navigate('/dashboard')
      setShouldQueryLocation(false)
    }
  }, [locationData])

  useEffect(() => {
    if (zipCode && !selectedDestination) setShouldQueryLocation(true)
  }, [zipCode])

  useEffect(() => {
    // if you hit the url directly and don't have a set destination or have an error redirect to page to make them select one
    setShouldQuery(!!(selectedDestination && !isEmpty(selectedDestination)))
    if (!settingDestination && (isEmpty(selectedDestination) || isError)) navigate('/')
  }, [settingDestination, selectedDestination, isError])

  return (
    <>
      {settingDestination || isPending ? (
        <CenterItemsContainer>
          <CenterItemsSubContainer>
            <Loader />
          </CenterItemsSubContainer>
        </CenterItemsContainer>
      ) : (
        <div>
          <ForecastPageContainer>
            <ZipCodeInput />
          </ForecastPageContainer>
          <CurrentForecast shouldQuery={shouldQuery} />
          <HourlyList shouldQuery={shouldQuery} />
          <WeekList shouldQuery={shouldQuery} />
        </div>
      )}
    </>
  )
}
