import { action } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

import { getPlanners } from 'modules/trips/api'
import { PlannerPreview } from 'modules/trips/types/planner'

class TripStore extends FetchStateStore {
	trips: PlannerPreview[]

	async onMount({ params, query }: MountParams) {
		this.getTrips()
	}

	onUnMount() {
		this.trips = undefined
	}

	@action.bound
	@loading
	async getTrips() {
		this.trips = await getPlanners()
	}
}

export default TripStore
