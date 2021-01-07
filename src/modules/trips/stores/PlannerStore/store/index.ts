import { action, observable } from 'mobx'

import { DEFAULT_DAY_PLANNER } from 'modules/trips/constants'
import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import { Planner, PlannerMode } from 'modules/trips/types/planner'

type Stores = {
	plannerApiStore: PlannerApiStore
}

class PlannerStore {
	@observable
	plannerApiStore: PlannerApiStore

	@observable
	mode = PlannerMode.Edit

	@observable
	planner: Planner

	@observable
	plannerDay = DEFAULT_DAY_PLANNER

	@action
	onInit({ plannerApiStore }: Stores) {
		this.plannerApiStore = plannerApiStore
		this.planner = plannerApiStore.planner
	}

	@action
	onUnMount() {
		this.plannerDay = DEFAULT_DAY_PLANNER
		this.plannerApiStore = undefined
		this.mode = PlannerMode.Edit
		this.planner = undefined
	}

	@action.bound
	setPlannerDay(day: number) {
		this.plannerDay = this.plannerDay === day ? DEFAULT_DAY_PLANNER : day
	}
}

export default PlannerStore
