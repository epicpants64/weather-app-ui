import { pickBy, identity } from 'lodash'

/**
 * creates a url with search params and strips out all params that would be undefined
 * keeps params that are specifically false
 * @function urlBuilder
 * @param {string} url
 * @param {object} params
 * @returns string (url)
 */
export const urlBuilder = (baseUrl, params) => {
  const url = new URL(baseUrl)

  // remove empty/undefined values but values that are specifically false should stay
  const definedParamas = pickBy(params, identity)

  // set query string for url
  url.search = new URLSearchParams({ ...definedParamas })

  return url.toString()
}
