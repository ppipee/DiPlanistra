import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import SearchStore from 'modules/search/stores/SearchStore/store'

const SearchContextStore = createContext<SearchStore>(null)

export default SearchContextStore

export const useSearchStore = createUseStoreSelector(SearchContextStore)
