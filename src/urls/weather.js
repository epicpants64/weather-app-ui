const { VITE_WEATHER_URL } = import.meta.env

/**
 * @memberof Weather
 * @function getCurrentForecast - (GET) get current weather information endpoint
 * @returns {JSON} current weather as JSON
 */
export const getCurrentForecast = () => `${VITE_WEATHER_URL}/current`

/**
 * @memberof Weather
 * @function getWeeklyForecast - (GET) get weekly weather information endpoint
 * @returns {JSON} weekly weather as JSON
 */
export const getWeeklyForecast = () => `${VITE_WEATHER_URL}/weekly`

/**
 * @memberof Weather
 * @function getCurrentForecast - (GET) get current weather information endpoint
 * @returns {JSON} current weather as JSON
 */
export const getAllForecastInfo = () => `${VITE_WEATHER_URL}/all`
