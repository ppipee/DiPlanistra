import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import HomeStore from 'modules/home/stores/HomeStore/store'

const HomeContextStore = createContext<HomeStore>(null)

export default HomeContextStore

export const useHomeStore = createUseStoreSelector(HomeContextStore)
