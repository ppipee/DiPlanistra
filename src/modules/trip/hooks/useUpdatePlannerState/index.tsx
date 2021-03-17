import { useCallback } from 'react'

import { useParams } from 'react-router'

import { Params } from 'core/router/types'

import { PlannerState } from 'modules/trip/constants'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'

export default function useUpdatePlannerState() {
	const { plannerId } = useParams<Params>()

	const { updatePlanner, isLoading } = usePlannerApiStore((store) => ({
		updatePlanner: store.updatePlanner,
		isLoading: store.isActionLoading['updatePlanner'],
	}))

	const moveToTravelState = useCallback(async () => {
		await updatePlanner({ state: PlannerState.Travel })
	}, [plannerId])

	const moveToPlanState = useCallback(async () => {
		await updatePlanner({ state: PlannerState.Plan })
	}, [])

	return { moveToPlanState, moveToTravelState, isLoading }
}
