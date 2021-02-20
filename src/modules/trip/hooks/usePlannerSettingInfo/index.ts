import { usePlannerSettingStore } from 'modules/trip/stores/PlannerSettingStore/context'

export default function usePlannerSettingInfo() {
	return usePlannerSettingStore(({ startDate, endDate, name }) => ({ date: { startDate, endDate }, name }))
}
