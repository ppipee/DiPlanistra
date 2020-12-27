import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlannerStore from '../store'

const PlannerStoreContext = createContext<PlannerStore>(null)

export const usePlannerStore = createUseStoreSelector(PlannerStoreContext)

export default PlannerStoreContext
