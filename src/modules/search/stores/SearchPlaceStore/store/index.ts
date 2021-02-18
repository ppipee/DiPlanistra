import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { Query } from 'core/router/types'

import getPageParams from 'common/stores/PageStore/utils/getPageParams'

import { getPlaces } from 'modules/place/api'
import { Category, PlacePreview } from 'modules/place/types/place'
import { getCategories } from 'modules/search/api'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'

class SearchPlaceStore extends FetchStateStore {
	@observable
	places: PlacePreview[]

	@observable
	categories: Category[] = []

	@action.bound
	@loading
	async getPlaces(query: Query) {
		const pageParams = getPageParams({ size: 20 })
		const places = await getPlaces({ ...query, ...pageParams })

		if (!this.error) {
			runInAction(() => {
				this.places = places.page?.entities
			})
		}
	}

	@action.bound
	@actionLoading
	async getCategories(domain = DEFAULT_PLACE_DOMAIN) {
		const { categories } = await getCategories(domain)

		if (!this.error) {
			runInAction(() => {
				this.categories = categories
			})
		}
	}
}

export default SearchPlaceStore
