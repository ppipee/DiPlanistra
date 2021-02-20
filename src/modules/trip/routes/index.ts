import PlannerPage from '../pages/PlannerPage'
import PlannersPage from '../pages/PlannersPage'
import TripPage from '../pages/TripPage'

import { TRIP_ROUTE, PLANNER_ROUTE, PLANNERS_ROUTE } from './paths'

const tripsRoutes = [
	{
		path: PLANNERS_ROUTE,
		exact: true,
		component: PlannersPage,
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
