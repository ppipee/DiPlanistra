import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { DomainValue } from 'common/constants/business'
import getPageParams from 'common/stores/PageStore/utils/getPageParams'

import { getPlaces } from 'modules/place/api'
import { PlacePreview } from 'modules/place/types/place'

export default class HomeStore extends FetchStateStore {
	@observable
	placesHighlight: PlacePreview[]

	onMount() {
		this.getPlacesHighlight()
	}

	@action
	@loading
	async getPlacesHighlight() {
		const pageParams = getPageParams({ size: 10, sort: 1 })
		const placeHighlight = await getPlaces({ domain: DomainValue.ATTRACTION, ...pageParams })

		if (!this.error) {
			runInAction(() => {
				this.placesHighlight = placeHighlight.page?.entities
			})
		}
	}
}
