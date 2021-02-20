import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import ActivityStore from '../store'

const ActivityStoreContext = createContext<ActivityStore>(null)

export const useActivityStore = createUseStoreSelector(ActivityStoreContext)

export default ActivityStoreContext
