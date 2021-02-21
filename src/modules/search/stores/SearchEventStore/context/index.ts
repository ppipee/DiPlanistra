import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import SearchEventStore from 'modules/search/stores/SearchEventStore/store'

const SearchEventContextStore = createContext<SearchEventStore>(null)

export default SearchEventContextStore

export const useSearchEventStore = createUseStoreSelector(SearchEventContextStore)
