import { action, observable } from 'mobx'

import { MountParams } from 'core/mobx/types'

import PlannerApiStore from 'modules/trip/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trip/stores/PlannerStore/store'

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
		this.plannerApiStore.getPlanner(tripId)
	}
}

export default TripStore
