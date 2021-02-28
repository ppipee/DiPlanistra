import { action, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { DomainValue } from 'common/constants/business'
import getPageParams from 'common/stores/PageStore/utils/getPageParams'

import { newCategories } from 'modules/home/api'
import { getPlaces } from 'modules/place/api'
import { PlacePreview } from 'modules/place/types/place'

export default class WelcomeStore extends FetchStateStore {
	recommendPlaces: PlacePreview[]

	@action.bound
	@actionLoading
	async newCategories(categories: number[]) {
		const data = await newCategories(categories)

		if (!this.error) {
			this.getRecommendPlaces(data.categories)
		}
	}

	@action.bound
	@actionLoading
	async getRecommendPlaces(categories: number[]) {
		const pageParams = getPageParams({ size: 20, sort: 1 })
		const places = await getPlaces({ domain: DomainValue.ATTRACTION, categories, ...pageParams })

		if (!this.error) {
			runInAction(() => {
				this.recommendPlaces = places.page?.entities
			})
		}
	}
}
