import { action, computed, observable } from 'mobx'

import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'

import { PlacePreview } from 'modules/place/types'
import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trips/stores/PlannerStore/store'
import { ActivityHour, EditorMode } from 'modules/trips/types/planner'

type Stores = {
	plannerApiStore: PlannerApiStore
	plannerStore: PlannerStore
}

class ActivityStore {
	plannerApiStore: PlannerApiStore

	plannerStore: PlannerStore

	@observable
	mode = EditorMode.Create

	@observable
	placeId: string

	@observable
	hour: ActivityHour

	@observable
	memo = ''

	@observable
	favoritePlaces: PlacePreview[]

	@observable
	activityId: string

	@action
	onMount() {
		this.favoritePlaces = PLACE_HIGHLIGHTS as any // remove
	}

	@action
	onInit({ plannerApiStore, plannerStore }: Stores) {
		this.plannerApiStore = plannerApiStore
		this.plannerStore = plannerStore
	}

	onUnMount() {
		this.resetActivityStore()
	}

	@action.bound
	selectActivity(activityId: string) {
		const { planner, plannerDay } = this.plannerInfo

		const planners = planner?.planners || []
		const activity = planners[plannerDay - 1].activities.find((activity) => activity.id === activityId)

		this.activityId = activityId
		this.placeId = activity.place.publicId
		this.hour = activity.hour
		this.memo = activity.memo
	}

	@action.bound
	setActivity({ hour, memo, placeId }: { hour?: ActivityHour; memo?: string; placeId?: string }) {
		this.hour = hour || this.hour
		this.memo = memo || this.memo
		this.placeId = placeId || this.placeId
	}

	@action.bound
	async saveActivity() {
		const { plannerDay } = this.plannerInfo

		const activityPlan = {
			memo: this.memo,
			hour: this.hour,
			placeId: this.placeId,
		}

		if (this.mode === EditorMode.Create) {
			await this.plannerApiStore.createActivity(plannerDay, activityPlan)
		} else {
			await this.plannerApiStore.updateActivity(plannerDay, activityPlan)
		}
	}

	async deleteActivity() {
		const { plannerDay } = this.plannerInfo

		await this.plannerApiStore.deleteActivity(plannerDay, this.activityId)
		this.resetActivityStore()
	}

	@action.bound
	resetActivityStore() {
		this.placeId = undefined
		this.hour = undefined
		this.memo = undefined
		this.activityId = undefined
		this.mode = EditorMode.Create
	}

	@action.bound
	setActivityMode(mode: EditorMode) {
		this.mode = mode
	}

	@computed
	get plannerInfo() {
		const plannerDay = this.plannerStore.plannerDay
		const planner = this.plannerStore.planner

		return { planner, plannerDay }
	}

	@computed
	get showActivityEditor() {
		return !!this.activityId
	}
}

export default ActivityStore
