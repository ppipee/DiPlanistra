import { EVENTS_ROUTE } from 'modules/event/routes/path'
import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

import EventsPage from '../pages/Events'
import TripsPage from '../pages/Trips'

const tripsRoutes = [
	{
		path: TRIPS_ROUTE,
		exact: true,
		component: TripsPage,
	},
	{ path: EVENTS_ROUTE, exact: true, component: EventsPage },
]

export default tripsRoutes
