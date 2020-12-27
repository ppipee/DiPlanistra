import { action } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

import { createPlanner, getPlanner } from 'modules/trips/api'
import { Planner, InitPlanner } from 'modules/trips/types/planner'

export enum PlannerActionState {
	CreatePlanner = 'createPlanner',
}

class PlannerStore extends FetchStateStore {
	planner: Planner

	// actionsState: Record<PlannerActionState, FetchState>

	onMount({ params: { plannerId } }: MountParams) {
		if (plannerId) {
			this.getPlanner(plannerId)
		}
	}

	onUnMount() {
		this.planner = undefined
	}

	@action
	@loading
	async getPlanner(plannerId: string) {
		this.planner = await getPlanner(plannerId)
	}

	@action.bound
	@actionLoading
	async createPlanner(data: InitPlanner) {
		this.planner = await createPlanner(data)

		return this.planner
	}
}

export default PlannerStore
