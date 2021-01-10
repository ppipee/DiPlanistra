import { useMemo } from 'react'

import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'
import sortActivities from 'modules/trips/utils/sortActivities'

export default function usePlannerActivities(dayPlanner: number) {
	const planners = usePlannerStore((store) => store.planner.planners)

	const plannerInfo = planners.find((planner) => planner.day === dayPlanner)

	const activitiesSorted = useMemo(() => sortActivities(plannerInfo.activities), [planners])

	return activitiesSorted
}
