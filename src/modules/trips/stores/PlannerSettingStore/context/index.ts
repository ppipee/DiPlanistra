import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import PlannerSettingStore from '../store'

const PlannerSettingStoreContext = createContext<PlannerSettingStore>(null)

export const usePlannerSettingStore = createUseStoreSelector(PlannerSettingStoreContext)

export default PlannerSettingStoreContext
