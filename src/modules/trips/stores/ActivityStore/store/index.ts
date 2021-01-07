import { action, computed, observable } from 'mobx'

import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'

import { PlacePreview } from 'modules/place/types'
import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trips/stores/PlannerStore/store'
import { ActivityHour } from 'modules/trips/types/planner'

type Stores = {
	plannerApiStore: PlannerApiStore
	plannerStore: PlannerStore
}

class ActivityStore {
	@observable
	plannerApiStore: PlannerApiStore

	@observable
	plannerStore: PlannerStore

	@observable
	placeId: string

	@observable
	hour: ActivityHour

	@observable
	memo = ''

	@observable
	favoritePlaces: PlacePreview[] = PLACE_HIGHLIGHTS as any // mock

	@observable
	activityIndex: number = -1

	@action
	onInit({ plannerApiStore, plannerStore }: Stores) {
		this.plannerApiStore = plannerApiStore
		this.plannerStore = plannerStore
	}

	@action.bound
	selectActivity(activityIndex: number) {
		const { planner, plannerDay } = this.plannerInfo

		const planners = planner?.planners || []
		const dayPlanner = { ...planners[plannerDay - 1].activities[activityIndex] }

		this.activityIndex = activityIndex
		this.placeId = dayPlanner.place.publicId
		this.hour = dayPlanner.hour
		this.memo = dayPlanner.memo
	}

	@action.bound
	setActivity({ hour, memo, placeId }: { hour?: ActivityHour; memo?: string; placeId?: string }) {
		if (hour) {
			this.hour = hour
		}
		if (memo) {
			this.memo = memo
		}
		if (placeId) {
			this.placeId = placeId
		}
	}

	@action.bound
	async saveActivity() {
		const { planner, plannerDay } = this.plannerInfo
		const plannerId = planner.id

		const activityPlan = {
			memo: this.memo,
			hour: this.hour,
			placeId: this.placeId,
		}

		await this.plannerApiStore.updateActivity(plannerId, plannerDay, activityPlan)
	}

	async deleteActivity() {
		const { planner, plannerDay } = this.plannerInfo
		const plannerId = planner.id

		await this.plannerApiStore.deleteActivity(plannerId, plannerDay, this.placeId)
		this.resetActivityStore()
	}

	@action.bound
	resetActivityStore() {
		this.placeId = undefined
		this.hour = undefined
		this.memo = undefined
		this.activityIndex = -1
	}

	@computed
	get plannerInfo() {
		const plannerDay = this.plannerStore.plannerDay
		const planner = this.plannerStore.planner

		return { planner, plannerDay }
	}

	onUnMount() {
		this.resetActivityStore()
	}
}

export default ActivityStore
