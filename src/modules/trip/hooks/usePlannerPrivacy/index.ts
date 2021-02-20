import { useCallback } from 'react'

import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

export default function usePlannerPrivacy() {
	const { isPublic, setPlannerPrivacy } = usePlannerStore((store) => ({
		isPublic: store.planner?.isPublic,
		setPlannerPrivacy: store.setPlannerPrivacy,
	}))

	const setPrivate = useCallback(() => {
		setPlannerPrivacy(false)
	}, [setPlannerPrivacy])

	const setPublic = useCallback(() => {
		setPlannerPrivacy(true)
	}, [setPlannerPrivacy])

	return { isPublic, setPrivate, setPublic }
}
