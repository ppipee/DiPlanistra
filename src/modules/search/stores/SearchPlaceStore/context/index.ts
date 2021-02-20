import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import SearchPlaceStore from 'modules/search/stores/SearchPlaceStore/store'

const SearchPlaceContextStore = createContext<SearchPlaceStore>(null)

export default SearchPlaceContextStore

export const useSearchPlaceStore = createUseStoreSelector(SearchPlaceContextStore)
