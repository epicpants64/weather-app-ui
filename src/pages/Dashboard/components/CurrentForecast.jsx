import { useDestination } from '../../../context/destinationContext'
import { ForecastPageContainer } from '../styles'
import { WeatherInfo } from './WeatherInfo'
import { useAllForecastInfoQuery } from '../../../cache/useAllForecastInfoQuery'

export const CurrentForecast = ({ shouldQuery }) => {
  const { selectedDestination } = useDestination()
  const { data } = useAllForecastInfoQuery({
    filter: { lon: selectedDestination?.lon, lat: selectedDestination?.lat },
    shouldQuery
  })

  const typographyVariants = {
    name: 'h2',
    temp: 'h1',
    feelsLike: 'h3',
    description: 'h3'
  }

  return (
    <ForecastPageContainer>
      <WeatherInfo
        variants={typographyVariants}
        name={selectedDestination?.name}
        temp={data?.current?.temp}
        feelsLike={data?.current?.feels_like}
        description={data?.current?.weather[0]?.description}
      />
    </ForecastPageContainer>
  )
}
