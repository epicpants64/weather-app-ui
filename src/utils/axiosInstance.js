import axios from 'axios'

/** global axios instance for the application if you needed to add a cancel token option, error handling, or auth for all requests it would go here
 * @function axiosInstance
 */
export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000
  }
})
