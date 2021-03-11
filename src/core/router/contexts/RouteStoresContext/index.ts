import { createContext } from 'react'

import { Store } from 'core/mobx/types'

const RouteStoresContext = createContext<Record<string, Store>>({})

export default RouteStoresContext
