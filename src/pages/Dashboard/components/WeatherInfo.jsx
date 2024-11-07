import { Typography } from '@mui/material'
import { startCase } from 'lodash'

export const WeatherInfo = ({ variants = {}, name, temp, feelsLike, description }) => {
  return (
    <>
      <Typography variant={variants.name || 'body1'}>{name}</Typography>
      <Typography variant={variants.temp || 'h6'}>{Math.ceil(temp)}&deg;F</Typography>
      <Typography variant={variants.feelsLike || 'body2'}>Feels Like: {Math.ceil(feelsLike)}&deg;F</Typography>
      <Typography variant={variants.description || 'body2'}>{startCase(description)}</Typography>
    </>
  )
}
