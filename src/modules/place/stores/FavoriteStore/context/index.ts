import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import FavoriteStore from '../store'

const FavoriteStoreContext = createContext<FavoriteStore>(null)

export const useFavoriteStore = createUseStoreSelector(FavoriteStoreContext)

export default FavoriteStoreContext
