import { createContext, useContext } from 'react'

import HomeStore from 'modules/home/stores/HomeStore/store'

const HomeContextStore = createContext<HomeStore>(null)

export default HomeContextStore

export const useHomeContext = () => useContext(HomeContextStore)
