import styled from 'styled-components'
import { Card, Stack, ListItemText } from '@mui/material'

// common styles
export const ForecastPageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  clear: left;
  height: auto;
  z-index: 0;
  text-align: center;
  margin-top: 50px;
`

// hourly styles
export const HourlyListContainer = styled(Card)`
  width: 75%;
  margin: 0 auto;
  border-radius: 18px !important;
  overflow-x: auto !important;
  padding-bottom: 15px;
`

export const HourlyStack = styled(Stack)`
  width: 190%;
`

export const HourlyItemContainer = styled.div`
  width: 24%;
`

// weekly styles
export const WeeklyListContainer = styled(HourlyListContainer)`
  padding: 0px;
`

export const RightSideListItemText = styled(ListItemText)`
  margin-left: auto !important;
  flex: unset !important;
`
