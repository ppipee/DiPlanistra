import PlannerPage from '../pages/PlannerPage'
import TripsPage from '../pages/TripsPage'

import { PLANNER_PATH, TRIP_PATH } from './paths'

const tripsRoutes = [
	{
		path: TRIP_PATH,
		exact: true,
		component: TripsPage,
	},
	{
		path: PLANNER_PATH,
		exact: true,
		component: PlannerPage,
	},
]

export default tripsRoutes
