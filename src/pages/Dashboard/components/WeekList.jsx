import { Typography, List, ListItemAvatar, ListItem, Avatar, ListItemText, Divider } from '@mui/material'

import { useDestination } from '../../../context/destinationContext'
import { useAllForecastInfoQuery } from '../../../cache/useAllForecastInfoQuery'
import { ForecastPageContainer, WeeklyListContainer, RightSideListItemText } from './styles'

export const WeekList = ({ shouldQuery }) => {
  const { selectedDestination } = useDestination()
  const { data } = useAllForecastInfoQuery({
    filter: { lon: selectedDestination?.lon, lat: selectedDestination?.lat },
    shouldQuery
  })

  /**
   * converUnixToDay
   * convert unix code from endpoint to day of the week
   * @param {Unix time} date
   * @returns string
   */
  const converUnixToDay = (date) => {
    return new Date(date * 1000)?.toLocaleDateString('en-US', { weekday: 'long' })
  }

  return (
    <ForecastPageContainer>
      {data?.daily && (
        <WeeklyListContainer>
          <List direction='row' spacing={1}>
            {data?.daily?.map((day) => (
              <>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={`https://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`} alt='' role='presentation' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={converUnixToDay(day?.dt)} />
                  <RightSideListItemText>
                    <Typography variant='h6'>L: {Math.ceil(day?.temp?.min)}&deg;F</Typography>
                    <Typography variant='h6'>H: {Math.ceil(day?.temp?.max)}&deg;F</Typography>
                  </RightSideListItemText>
                </ListItem>
                {/* add a divider to everything other than the last on the list each day should have a unique dt and length isn't 0 indexed*/}
                {data?.daily?.findIndex((indexDay) => indexDay.dt === day?.dt) < data?.daily?.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </WeeklyListContainer>
      )}
    </ForecastPageContainer>
  )
}
