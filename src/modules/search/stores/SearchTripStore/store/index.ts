import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { searchTrips } from 'modules/search/api'
import { SearchTripsQueries } from 'modules/search/types'
import { PlannerPreview } from 'modules/trip/types/planner'

class SearchTripStore extends FetchStateStore {
	@observable
	trips: PlannerPreview[]

	@action.bound
	@loading
	async getTrips(queries?: SearchTripsQueries) {
		const data = await searchTrips(queries)

		if (!this.error) {
			runInAction(() => {
				this.trips = data.trips
			})
		}
	}

	@action.bound
	clear() {
		this.trips = undefined
	}
}

export default SearchTripStore
