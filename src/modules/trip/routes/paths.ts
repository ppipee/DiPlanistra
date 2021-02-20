import { USER_PATH } from 'modules/user/routes/paths'

export const TRIP_PATH = '/trips'
export const TRIP_ROUTE = `${TRIP_PATH}/:tripId`
export const TRIPS_ROUTE = TRIP_PATH

export const PLANNER_PATH = `${USER_PATH}/planners`
export const PLANNERS_ROUTE = `${PLANNER_PATH}`
export const PLANNER_ROUTE = `${PLANNER_PATH}/:plannerId`
