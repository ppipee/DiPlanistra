import { action, observable } from 'mobx'

import { MountParams } from 'core/mobx/types'

import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trips/stores/PlannerStore/store'

type Stores = {
	plannerApiStore: PlannerApiStore
	plannerStore: PlannerStore
}

class TripStore {
	@observable
	plannerApiStore: PlannerApiStore

	@action
	onInit({ plannerApiStore }: Stores) {
		this.plannerApiStore = plannerApiStore
	}

	onMount({ params: { tripId } }: MountParams) {
		this.plannerApiStore.getTrip(tripId)
	}

	@action
	onUnMount() {}
}

export default TripStore
