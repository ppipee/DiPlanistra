import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import NearbyPositionStore from '../store'

const NearbyPositionStoreContext = createContext<NearbyPositionStore>(null)

export const useNearbyPositionStore = createUseStoreSelector(NearbyPositionStoreContext)

export default NearbyPositionStoreContext
