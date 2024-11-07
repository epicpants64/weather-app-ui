import { useQuery } from '@tanstack/react-query'
import { getLocationByZip } from '../urls'
import { urlBuilder, axiosInstance } from '../utils'
import { CURRENT_LOCATION_QUERY, QUERY_STALE_TIMES } from '../constants/queries'

const fetchCurrentInfo = async ({ zipCode }) => {
  if (!zipCode) throw new Error('zipCode is required to get current location information')
  // validate that its a proper US zipcode
  const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/
  const isValid = zipCodeRegex.test(zipCode)

  if (!isValid) throw new Error('zipCode must be a valid US zipcode')
  try {
    const currentLocation = await axiosInstance.get(urlBuilder(getLocationByZip(), { zipCode, countryCode: 'US' }))
    return currentLocation?.data
  } catch (error) {
    // the ZIP code was the right number of chars but not valid
    if (error.status === 404) error.message = 'Please enter a valid ZIP code'
    throw new Error(error)
  }
}

// I would generally have smaller payloads more specific to my need of the section of the app
// but since this was so small and the API has a set number of calls a day I figured it was best to pull the whole locations data into state
export const useCurrentLocationInfoQuery = ({ zipCode, shouldQuery }) => {
  return useQuery({
    queryKey: [CURRENT_LOCATION_QUERY, zipCode],
    queryFn: () => fetchCurrentInfo({ zipCode, shouldQuery }),
    staleTime: QUERY_STALE_TIMES.CURRENT_LOCATION_QUERY,
    retry: 0,
    enabled: shouldQuery
  })
}
