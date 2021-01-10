import { omit } from 'lodash'
import { action, observable } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

import PLANNER from 'common/mocks/planner'

import { createActivity, deleteActivity, getPlanner, updateActivity, updatePlanner } from 'modules/trips/api'
import { EditActivity, Planner } from 'modules/trips/types/planner'

class PlannerApiStore extends FetchStateStore {
	@observable
	planner: Planner

	@action
	onMount({ params: { plannerId } }: MountParams) {
		if (plannerId) {
			this.planner = PLANNER
			// this.getPlanner(plannerId)
		}
	}

	@action
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

	@action.bound
	@actionLoading
	async updatePlanner(planner: Partial<Planner>) {
		const plannerUpdated = await updatePlanner(this.planner.id, planner)

		if (!this.error) {
			this.planner = plannerUpdated
		}
	}

	@action.bound
	@actionLoading
	async createActivity(day: number, activity: EditActivity) {
		const activityUpdated = await createActivity(this.planner.id, day, activity)

		if (!this.error) {
			const planners = [...this.planner.planners]
			planners[day - 1].activities.push(activityUpdated)

			this.planner = { ...this.planner, planners }
		}
	}

	@action.bound
	@actionLoading
	async updateActivity(day: number, activity: EditActivity) {
		const activityId = activity.id
		const activityUpdated = await updateActivity(this.planner.id, day, activityId, omit(activity, 'id'))

		if (!this.error) {
			const planners = [...this.planner.planners]
			const activityIndex = planners[day - 1].activities.findIndex((activity) => activity.id === activityId)
			planners[day - 1].activities[activityIndex] = activityUpdated

			this.planner = {
				...this.planner,
				planners,
			}
		}
	}

	@action.bound
	@actionLoading
	async deleteActivity(day: number, activityId: string) {
		await deleteActivity(this.planner.id, day, activityId)

		if (!this.error) {
			const planners = [...this.planner.planners]
			const activityIndex = planners[day - 1].activities.findIndex((activity) => activity.id === activityId)

			planners[day - 1].activities.splice(activityIndex, 1)

			this.planner = { ...this.planner, planners }
		}
	}
}

export default PlannerApiStore
