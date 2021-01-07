import { action, observable } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

import PLANNER from 'common/mocks/planner'

import { deleteActivity, getPlanner, updateActivity, updatePlanner } from 'modules/trips/api'
import { EditActivity, Planner } from 'modules/trips/types/planner'

class PlannerApiStore extends FetchStateStore {
	@observable
	planner: Planner = PLANNER

	onMount({ params: { plannerId } }: MountParams) {
		if (plannerId) {
			// this.getPlanner(plannerId)
		}
	}

	onUnMount() {
		this.planner = undefined
	}

	@action
	@loading
	async getPlanner(plannerId: string) {
		const planner = await getPlanner(plannerId)

		if (!this.error) {
			this.planner = planner
		}
	}

	@action
	@actionLoading
	async updatePlanner(plannerId: string, planner: Planner) {
		await updatePlanner(plannerId, planner)

		if (!this.error) {
			this.planner = { ...planner }
		}
	}

	@action
	@actionLoading
	async updateActivity(plannerId: string, day: number, activity: EditActivity) {
		const plannerUpdated = await updateActivity(plannerId, day, activity)

		if (!this.error) {
			this.planner = plannerUpdated
		}
	}

	@action
	@actionLoading
	async deleteActivity(plannerId: string, day: number, placeId: string) {
		const plannerUpdated = await deleteActivity(plannerId, day, placeId)

		if (!this.error) {
			this.planner = plannerUpdated
		}
	}
}

export default PlannerApiStore
