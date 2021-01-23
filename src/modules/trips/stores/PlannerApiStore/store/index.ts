import { omit } from 'lodash'
import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { MOCK_TRIP } from 'common/mocks/trip'

import { createActivity, deleteActivity, getPlanner, updateActivity, updatePlanner } from 'modules/trips/api'
import { EditActivity, Planner } from 'modules/trips/types/planner'

class PlannerApiStore extends FetchStateStore {
	@observable
	planner: Planner

	@action
	onUnMount() {
		this.planner = undefined
	}

	@action.bound
	@loading
	async getPlanner(plannerId: string) {
		const planner = await getPlanner(plannerId)

		if (!this.error) {
			runInAction(() => {
				this.planner = planner
			})
		}
	}

	@action.bound
	@actionLoading
	async updatePlanner(planner: Partial<Planner>) {
		const plannerUpdated = await updatePlanner(this.planner.id, planner)

		if (!this.error) {
			runInAction(() => {
				this.planner = plannerUpdated
			})
		}
	}

	@action.bound
	@actionLoading
	async createActivity(day: number, activity: EditActivity) {
		const plannerUpdated = await createActivity(this.planner.id, day, activity)

		if (!this.error) {
			// const newPlanner = { ...this.planner }
			// const planners = [...newPlanner.planners]
			// planners[day - 1].activities.push(activityUpdated)

			runInAction(() => {
				this.planner = plannerUpdated
			})
		}
	}

	@action.bound
	@actionLoading
	async updateActivity(day: number, activity: EditActivity) {
		const activityId = activity.id
		const plannerUpdated = await updateActivity(this.planner.id, day, activityId, omit(activity, 'id'))

		if (!this.error) {
			// const planners = [...this.planner.planners]
			// const activityIndex = planners[day - 1].activities.findIndex((activity) => activity.id === activityId)
			// planners[day - 1].activities[activityIndex] = activityUpdated

			runInAction(() => {
				this.planner = plannerUpdated
			})
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

			runInAction(() => {
				this.planner = { ...this.planner, planners }
			})
		}
	}

	@action.bound
	@loading
	async getTrip(tripId: string) {
		this.planner = MOCK_TRIP
	}
}

export default PlannerApiStore
