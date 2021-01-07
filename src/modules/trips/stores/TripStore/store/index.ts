import { action } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { getPlanners, createPlanner } from 'modules/trips/api'
import { PlannerPreview, InitPlanner } from 'modules/trips/types/planner'

class TripStore extends FetchStateStore {
	trips: PlannerPreview[]

	async onMount() {
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

	@action.bound
	@actionLoading
	async createPlanner(data: InitPlanner) {
		const trip = await createPlanner(data)

		this.trips = [...this.trips, trip]
	}
}

export default TripStore
