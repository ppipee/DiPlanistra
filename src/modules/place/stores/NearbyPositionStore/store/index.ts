import { isEmpty } from 'lodash'
import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { DomainValue } from 'common/constants/business'

import { getPlaces } from 'modules/place/api'
import { NearbyPositionType } from 'modules/place/types/store'
import { DISTANCE_KM } from 'modules/search/constants'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'

class NearbyPositionStore extends FetchStateStore {
	@observable
	nearbyPosition: NearbyPositionType = {
		1: [],
		2: [],
		3: [],
		4: [],
	}

	@action
	onUnMount() {
		this.nearbyPosition = {
			1: [],
			2: [],
			3: [],
			4: [],
		}
	}

	@action.bound
	@loading
	async getNearbyPosition(
		domain: DomainValue = DEFAULT_PLACE_DOMAIN,
		lat: number,
		lng: number,
		distance = DISTANCE_KM * 5,
	) {
		if (!isEmpty(this.nearbyPosition[domain])) return

		const placesPage = await getPlaces({ lat, lng, domain, distance })

		if (!this.error) {
			const places = placesPage.page.entities
			runInAction(() => {
				const nearbyPosition = { ...this.nearbyPosition }
				nearbyPosition[domain] = places

				this.nearbyPosition = nearbyPosition
			})
		}
	}
}

export default NearbyPositionStore
