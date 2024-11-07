const { VITE_LOCATION_URL } = import.meta.env

/**
 * @memberof Location
 * @function getLocationByZip - (GET) get location information (name, lon, lat) from zipcode
 * @returns {JSON} location from zipcode as JSON
 */
export const getLocationByZip = () => `${VITE_LOCATION_URL}/zipCode`
