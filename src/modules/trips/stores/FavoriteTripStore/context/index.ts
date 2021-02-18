import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import FavoriteTripStore from '../store'

const FavoriteTripStoreContext = createContext<FavoriteTripStore>(null)

export const useFavoriteTripStore = createUseStoreSelector(FavoriteTripStoreContext)

export default FavoriteTripStoreContext
