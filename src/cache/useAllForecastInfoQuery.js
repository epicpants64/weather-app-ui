import { isEmpty } from 'lodash'
import { useQuery } from '@tanstack/react-query'

import { getAllForecastInfo } from '../urls'
import { urlBuilder, axiosInstance } from '../utils'
import { ALL_LOCATION_INFO, QUERY_STALE_TIMES } from '../constants/queries'

const fetchAllForecastInfo = async (filter) => {
  try {
    // this in theory should not be needed since we are checking for it in enable but doesnt hurt
    if (!filter?.lon || !filter?.lat) throw new Error('lon and lat are required to get weather information')
    const { lon, lat } = filter
    const { data: forecastInfo } = await axiosInstance.get(urlBuilder(getAllForecastInfo(), { lon, lat }))
    return { current: forecastInfo?.current, hourly: forecastInfo?.hourly, daily: forecastInfo?.daily }
  } catch (error) {
    // the lon and lat werent correct/found will redirect to the home page
    if (error.status === 404) error.message = 'Location not found. Please enter a valid ZIP code'
    throw new Error(error)
  }
}

// I would generally have smaller payloads more specific to my need of the section of the app
// but since this was so small and the API has a set number of calls a day I figured it was best to pull the whole locations data into state
export const useAllForecastInfoQuery = ({ filter, shouldQuery }) => {
  return useQuery({
    queryKey: [ALL_LOCATION_INFO, filter],
    queryFn: () => fetchAllForecastInfo(filter),
    staleTime: QUERY_STALE_TIMES.CURRENT_FORECAST_QUERY,
    enabled: shouldQuery && !!filter && !isEmpty(filter) && !!filter?.lon && !!filter?.lat,
    retry: 0
  })
}
