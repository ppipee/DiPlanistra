import { useMemo } from 'react'

import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'
import sortActivities from 'modules/trips/utils/sortActivities'

export default function usePlannerActivities(dayPlanner: number) {
	const planner = usePlannerStore((store) => store.planner)

	const activities = planner.planners.find((planner) => planner.day === dayPlanner).activities

	const activitiesSorted = useMemo(() => sortActivities(activities), [activities])

	return activitiesSorted
}
