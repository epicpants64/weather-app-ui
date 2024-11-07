import { LargeLoader } from './styles'

/**
 * This is a basic loader that Loadable will use for lazy loading
 * @returns Component
 */
export const Loader = () => (
  // this is taken from materials docs i just thought it looked pretty
  <>
    <svg width={0} height={0}>
      <defs>
        <linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#e01cd5' />
          <stop offset='100%' stopColor='#1CB5E0' />
        </linearGradient>
      </defs>
    </svg>
    <LargeLoader sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
  </>
)
