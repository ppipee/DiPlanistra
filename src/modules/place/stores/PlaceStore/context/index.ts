import { createContext } from 'react'

import PlaceStore from '../store'

const PlaceStoreContext = createContext<PlaceStore>(null)

export default PlaceStoreContext
