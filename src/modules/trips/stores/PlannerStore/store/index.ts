import { action, computed, observable } from 'mobx'

import { DEFAULT_PLANNER_DAY } from 'modules/trips/constants'
import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import { PlannerMode } from 'modules/trips/types/store'

type Stores = {
	plannerApiStore: PlannerApiStore
}

class PlannerStore {
	plannerApiStore: PlannerApiStore

	mode = PlannerMode.Edit

	@observable
	plannerDay = DEFAULT_PLANNER_DAY

	@action
	onInit({ plannerApiStore }: Stores) {
		this.plannerApiStore = plannerApiStore
	}

	@action
	onUnMount() {
		this.plannerDay = DEFAULT_PLANNER_DAY
		this.plannerApiStore = undefined
		this.mode = PlannerMode.Edit
	}

	@action.bound
	setPlannerDay(day: number) {
		this.plannerDay = this.plannerDay === day ? DEFAULT_PLANNER_DAY : day
	}

	@computed
	get planner() {
		return this.plannerApiStore.planner
	}
}

export default PlannerStore
