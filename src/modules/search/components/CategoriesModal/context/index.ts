import { createContext, useContext } from 'react'

import { CategoriesContextProps } from '../types'

const CategoriesContext = createContext<CategoriesContextProps>(null)

export const useCategoriesContext = () => useContext(CategoriesContext)

export default CategoriesContext
