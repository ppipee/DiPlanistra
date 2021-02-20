import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlannersStoreStore from '../store'

const PlannersStoreStoreContext = createContext<PlannersStoreStore>(null)

export const usePlannersStoreStore = createUseStoreSelector(PlannersStoreStoreContext)

export default PlannersStoreStoreContext
