import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

import TripsPage from '../pages/Trips'

const tripsRoutes = [
	{
		path: TRIPS_ROUTE,
		exact: true,
		component: TripsPage,
	},
]

export default tripsRoutes
