import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import TripStore from '../store'

const TripStoreContext = createContext<TripStore>(null)

export const useTripStore = createUseStoreSelector(TripStoreContext)

export default TripStoreContext
