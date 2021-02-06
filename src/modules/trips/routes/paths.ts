import { USER_PATH } from 'modules/user/routes/paths'

export const TRIP_PATH = `${USER_PATH}/trips`
export const TRIP_ROUTE = `${TRIP_PATH}/:tripId`

export const PLANNER_PATH = `${USER_PATH}/planner`
export const PLANNER_ROUTE = `${PLANNER_PATH}/:plannerId`
