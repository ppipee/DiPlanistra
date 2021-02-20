import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { getPlanners, createPlanner } from 'modules/trip/api'
import { PlannerPreview, InitPlanner } from 'modules/trip/types/planner'

class PlannersStore extends FetchStateStore {
	@observable
	trips: PlannerPreview[]

	async onMount() {
		this.getTrips()
	}

	@action.bound
	@loading
	async getTrips() {
		const trips = await getPlanners()

		if (!this.error) {
			runInAction(async () => {
				this.trips = trips
			})
		}
	}

	@action.bound
	@actionLoading
	async createPlanner(data: InitPlanner) {
		const trip = await createPlanner(data)

		return !this.error ? trip : null
	}
}

export default PlannersStore
