import { useDestination } from '../../../context/destinationContext'
import { useAllForecastInfoQuery } from '../../../cache/useAllForecastInfoQuery'
import { HourlyListContainer, HourlyItemContainer, HourlyStack } from './styles'
import { ForecastPageContainer } from '../styles'
import { WeatherInfo } from './WeatherInfo'

export const HourlyList = ({ shouldQuery }) => {
  const { selectedDestination } = useDestination()
  const { data } = useAllForecastInfoQuery({
    filter: { lon: selectedDestination?.lon, lat: selectedDestination?.lat },
    shouldQuery
  })

  /**
   * convertUnixToHour
   * convert unix code from endpoint to 12hr hour
   * @param {Unix time} date
   * @returns string
   */
  const convertUnixToHour = (date) => {
    const newDate = new Date(date * 1000).getHours()
    const hour = (newDate + 24) % 12 || 12
    return `${hour} ${newDate > 12 ? 'PM' : 'AM'}`
  }

  return (
    <ForecastPageContainer>
      {data?.hourly && (
        <HourlyListContainer>
          <HourlyStack direction='row' spacing={1}>
            {/* only show 12 hrs */}
            {data?.hourly?.slice(0, 12).map((hour) => (
              <HourlyItemContainer key={hour?.dt}>
                <img src={`https://openweathermap.org/img/wn/${hour?.weather[0]?.icon}@2x.png`} alt='' role='presentation' />
                <WeatherInfo
                  name={convertUnixToHour(hour?.dt)}
                  temp={hour?.temp}
                  feelsLike={hour?.feels_like}
                  description={hour?.weather[0]?.description}
                />
              </HourlyItemContainer>
            ))}
          </HourlyStack>
        </HourlyListContainer>
      )}
    </ForecastPageContainer>
  )
}
