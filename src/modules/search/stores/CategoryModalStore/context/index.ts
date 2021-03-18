import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import CategoryModalStore from 'modules/search/stores/CategoryModalStore/store'

const CategoryModalContextStore = createContext<CategoryModalStore>(null)

export default CategoryModalContextStore

export const useCategoryModalStore = createUseStoreSelector(CategoryModalContextStore)
