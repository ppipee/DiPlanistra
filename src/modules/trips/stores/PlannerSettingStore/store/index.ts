import { action, observable } from 'mobx'

import { navigateDate } from 'common/utils/datetime/navigateDateTime'

import PlannerApiStore from 'modules/trips/stores/PlannerApiStore/store'
import PlannerStore from 'modules/trips/stores/PlannerStore/store'
import { InitPlanner } from 'modules/trips/types/planner'

interface Stores {
	plannerStore: PlannerStore
	plannerApiStore: PlannerApiStore
}

class PlannerSettingStore {
	@observable
	plannerStore: PlannerStore

	@observable
	plannerApiStore: PlannerApiStore

	@observable
	isOpenSetting = false

	@observable
	name: string

	@observable
	startDate: Date

	@observable
	endDate: Date

	@action
	onInit({ plannerApiStore }: Stores) {
		this.plannerApiStore = plannerApiStore
	}

	@action.bound
	setIsOpenSetting(state: boolean) {
		this.isOpenSetting = state
	}

	@action.bound
	setPlannerInfo({ startDate, endDate, name }: Partial<InitPlanner>) {
		this.startDate = startDate || this.startDate
		this.endDate = endDate || this.endDate
		this.name = name || this.name
	}

	@action.bound
	async updatePlanner() {
		await this.plannerApiStore.updatePlanner({
			name: this.name,
			startDate: this.startDate,
			endDate: this.endDate,
		})
	}

	@action.bound
	async addDay(dayAmount = 1) {
		const endDate = navigateDate(this.endDate, dayAmount)

		this.endDate = endDate
		await this.updatePlanner()
	}

	@action.bound
	async updateDay(day: number, title: string) {
		const plannerUpdated = { ...this.plannerApiStore.planner }
		plannerUpdated.planners[day - 1].title = title

		const planners = [...plannerUpdated.planners].map(({ title, day, description }) => ({
			title,
			day,
			description,
		}))

		await this.plannerApiStore.updatePlanner({
			planners,
		})
	}

	@action.bound
	deleteDay(day: number) {
		// eslint-disable-next-line no-console
		console.log('delete ', day)
		// starting from day 1
	}

	@action.bound
	clear() {
		this.name = undefined
		this.startDate = undefined
		this.endDate = undefined
		this.isOpenSetting = false
	}
}

export default PlannerSettingStore
