import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import TripsStore from '../store'

const TripsStoreContext = createContext<TripsStore>(null)

export const useTripsStore = createUseStoreSelector(TripsStoreContext)

export default TripsStoreContext
