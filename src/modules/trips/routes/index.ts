import PlannerPage from '../pages/PlannerPage'
import TripPage from '../pages/TripPage'
import TripsPage from '../pages/TripsPage'

import { TRIP_ROUTE, PLANNER_ROUTE, TRIP_PATH } from './paths'

const tripsRoutes = [
	{
		path: TRIP_PATH,
		exact: true,
		component: TripsPage,
	},
	{
		path: PLANNER_ROUTE,
		exact: true,
		component: PlannerPage,
	},
	{
		path: TRIP_ROUTE,
		exact: true,
		component: TripPage,
	},
]

export default tripsRoutes
