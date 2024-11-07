export const TIMES = {
  TEN_SECONDS: 1000 * 10,
  THIRTY_SECONDS: 1000 * 30,
  ONE_MINUTE: 1000 * 60,
  THIRTY_MINUTES: 1000 * 60 * 30,
  TWO_HOURS: 1000 * 60 * 60 * 2,
  INFINITE: Infinity
}

const { THIRTY_MINUTES, INFINITE } = TIMES

export const QUERY_STALE_TIMES = {
  // weather doesn't change that often between thirty minutes but if this isn't often enough easy enough to change
  ALL_LOCATION_INFO: THIRTY_MINUTES,
  // location coordinates and name shouldn't change
  CURRENT_LOCATION_QUERY: INFINITE
}

export const ALL_LOCATION_INFO = 'ALL_LOCATION_INFO'
export const CURRENT_LOCATION_QUERY = 'CURRENT_LOCATION_QUERY'
