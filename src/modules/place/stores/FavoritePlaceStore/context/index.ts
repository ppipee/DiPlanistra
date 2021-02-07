import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import FavoritePlaceStore from '../store'

const FavoritePlaceStoreContext = createContext<FavoritePlaceStore>(null)

export const useFavoritePlaceStore = createUseStoreSelector(FavoritePlaceStoreContext)

export default FavoritePlaceStoreContext
