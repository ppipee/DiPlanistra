import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import MobileSearchInputStore from 'modules/search/stores/MobileSearchInputStore/store'

const MobileSearchInputContextStore = createContext<MobileSearchInputStore>(null)

export default MobileSearchInputContextStore

export const useMobileSearchInputStore = createUseStoreSelector(MobileSearchInputContextStore)
