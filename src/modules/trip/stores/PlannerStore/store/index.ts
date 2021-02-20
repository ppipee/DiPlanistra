import { action, computed, observable } from 'mobx'

import { MountParams } from 'core/mobx/types'

import { DEFAULT_PLANNER_DAY, DEFAULT_PLANNER_MODE } from 'modules/trip/constants'
import PlannerApiStore from 'modules/trip/stores/PlannerApiStore/store'
import definePlannerMode from 'modules/trip/utils/definePlannerMode'

type Stores = {
	plannerApiStore: PlannerApiStore
}

class PlannerStore {
	@observable
	plannerApiStore: PlannerApiStore

	@observable
	mode = DEFAULT_PLANNER_MODE

	@observable
	plannerDay = DEFAULT_PLANNER_DAY

	@action
	onInit({ plannerApiStore }: Stores) {
		this.plannerApiStore = plannerApiStore
	}

	@action
	onMount({ location }: MountParams) {
		this.mode = definePlannerMode(location.pathname)
	}

	@action
	onUnMount() {
		this.plannerDay = DEFAULT_PLANNER_DAY
		this.mode = DEFAULT_PLANNER_MODE
	}

	@action.bound
	setPlannerDay(day: number) {
		this.plannerDay = this.plannerDay === day ? DEFAULT_PLANNER_DAY : day
	}

	@action.bound
	async setPlannerPrivacy(isPublic: boolean) {
		await this.plannerApiStore.updatePlanner({ isPublic })
	}

	@computed
	get planner() {
		return this.plannerApiStore.planner
	}
}

export default PlannerStore
