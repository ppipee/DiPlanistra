import { useCallback } from 'react'

import { usePlannerSettingStore } from 'modules/trips/stores/PlannerSettingStore/context'
import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'

export default function useSwitchPlannerSetting() {
	const { setIsOpenSetting, setPlannerInfo } = usePlannerSettingStore((store) => ({
		setIsOpenSetting: store.setIsOpenSetting,
		setPlannerInfo: store.setPlannerInfo,
	}))
	const { startDate, endDate, name } = usePlannerStore((store) => store.planner)

	const closeSetting = useCallback(() => {
		setIsOpenSetting(false)
	}, [])

	const openSetting = useCallback(() => {
		setIsOpenSetting(true)
		setPlannerInfo({ startDate: new Date(startDate), endDate: new Date(endDate), name })
	}, [startDate, endDate, name])

	return { openSetting, closeSetting }
}
