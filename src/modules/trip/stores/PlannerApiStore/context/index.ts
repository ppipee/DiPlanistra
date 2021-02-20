import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlannerApiStore from '../store'

const PlannerApiStoreContext = createContext<PlannerApiStore>(null)

export const usePlannerApiStore = createUseStoreSelector(PlannerApiStoreContext)

export default PlannerApiStoreContext
