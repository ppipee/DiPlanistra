import { DEFAULT_PLANNER_MODE } from 'modules/trip/constants'
import { PlannerMode } from 'modules/trip/types/store'

export default function definePlannerMode(pathname: string) {
	const plannerPathRegex = /^\/me\/planners\/\w+$/
	const isPlannerPath = plannerPathRegex.test(pathname)

	if (isPlannerPath) {
		return PlannerMode.Edit
	}

	const tripPathRegex = /^\/trips\/\w+$/
	const isTripPath = tripPathRegex.test(pathname)

	if (isTripPath) {
		return PlannerMode.View
	}

	return DEFAULT_PLANNER_MODE
}
