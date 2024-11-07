/* eslint-disable react/jsx-props-no-spreading */
import { Suspense } from 'react'
import { Loader } from './Loader'

/**
 * This should wrap all lazy loaded components
 * @param {*} Component
 * @returns Component
 */
export const LazyLoadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
)
