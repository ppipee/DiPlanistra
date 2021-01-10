import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlaceStore from '../store'

const PlaceStoreContext = createContext<PlaceStore>(null)

export const usePlaceStore = createUseStoreSelector(PlaceStoreContext)

export default PlaceStoreContext
