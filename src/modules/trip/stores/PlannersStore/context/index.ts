import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlannersStore from '../store'

const PlannersStoreContext = createContext<PlannersStore>(null)

export const usePlannersStore = createUseStoreSelector(PlannersStoreContext)

export default PlannersStoreContext
