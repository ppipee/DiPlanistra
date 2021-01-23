import { DEFAULT_PLANNER_MODE } from 'modules/trips/constants'
import { PlannerMode } from 'modules/trips/types/store'

export default function definePlannerMode(pathname: string) {
	const plannerPathRegex = /^\/planner\/\w+$/
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
