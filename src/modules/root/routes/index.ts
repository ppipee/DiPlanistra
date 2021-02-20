import HomeRoute from 'modules/home/routes'
import PlaceRoute from 'modules/place/routes'
import TripsRoutes from 'modules/trip/routes'
import UserRoute from 'modules/user/routes'

import RootPage from '../pages/RootPage'

const rootRoute = {
	path: '/',
	component: RootPage,
	routes: [HomeRoute, ...TripsRoutes, ...PlaceRoute, ...UserRoute],
}

export default [rootRoute]
