import { createContext } from 'react'

import HomeApiStore from 'modules/home/stores/HomeAPIStore/store'

const HomeApiContextStore = createContext<HomeApiStore>(null)

export default HomeApiContextStore
