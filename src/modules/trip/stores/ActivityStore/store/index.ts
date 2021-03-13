import { action, computed, observable } from 'mobx'

import { DomainValue } from 'common/constants/business'

import FavoritePlaceStore from 'modules/place/stores/FavoritePlaceStore/store'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'
import PlannerApiStore from 'modules/trip/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trip/stores/PlannerStore/store'
import { ActivityHour } from 'modules/trip/types/planner'
import { EditorMode } from 'modules/trip/types/store'

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
	favoritePlaceStore: FavoritePlaceStore

	@observable
	mode = EditorMode.View

	@observable
	placeId: string

	@observable
	hour: ActivityHour = {
		from: '',
		to: '',
	}

	@observable
	domain = DEFAULT_PLACE_DOMAIN

	@observable
	memo = ''

	@observable
	activityId: string

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
			await this.plannerApiStore.updateActivity(plannerDay, { ...activityPlan, id: this.activityId })
		}
	}

	@action.bound
	async deleteActivity() {
		const { plannerDay } = this.plannerInfo

		await this.plannerApiStore.deleteActivity(plannerDay, this.activityId)
		this.resetActivityStore()
	}

	@action.bound
	resetActivityStore() {
		this.placeId = undefined
		this.memo = ''
		this.activityId = undefined
		this.mode = EditorMode.View
		this.hour = {
			from: '',
			to: '',
		}
	}

	@action.bound
	setActivityMode(mode: EditorMode) {
		this.mode = mode
	}

	@action.bound
	setDomain(domain: DomainValue) {
		this.domain = domain
	}

	@computed
	get plannerInfo() {
		const plannerDay = this.plannerStore.plannerDay
		const planner = this.plannerStore.planner

		return { planner, plannerDay }
	}

	@computed
	get showActivityEditor() {
		return this.mode !== EditorMode.View
	}
}

export default ActivityStore
