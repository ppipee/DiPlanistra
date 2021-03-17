import { PlannerInfo } from './types/planner'
import { PlannerMode } from './types/store'

export const DEFAULT_PLANNER_DAY = 0
export const DEFAULT_PLANNER_INFO: PlannerInfo = {
	day: 0,
	title: '',
	description: '',
	activities: [],
}

export const DEFAULT_PLANNER_MODE = PlannerMode.View

export const PlannerState = {
	Plan: 1,
	Travel: 2,
} as const

export type PlannerState = typeof PlannerState[keyof typeof PlannerState]
