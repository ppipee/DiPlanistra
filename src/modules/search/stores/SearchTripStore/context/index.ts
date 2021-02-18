import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import SearchTripStore from 'modules/search/stores/SearchTripStore/store'

const SearchTripContextStore = createContext<SearchTripStore>(null)

export default SearchTripContextStore

export const useSearchTripStore = createUseStoreSelector(SearchTripContextStore)
