import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import FavoriteEventStore from '../store'

const FavoriteEventStoreContext = createContext<FavoriteEventStore>(null)

export const useFavoriteEventStore = createUseStoreSelector(FavoriteEventStoreContext)

export default FavoriteEventStoreContext
