import { usePlannerSettingStore } from 'modules/trips/stores/PlannerSettingStore/context'

export default function usePlannerSettingInfo() {
	return usePlannerSettingStore(({ startDate, endDate, name }) => ({ date: { startDate, endDate }, name }))
}
