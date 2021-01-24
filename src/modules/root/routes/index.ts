import FavoriteRoute from 'modules/favorites/routes'
import HomeRoute from 'modules/home/routes'
import PlaceRoute from 'modules/place/routes'
import SearchRoute from 'modules/search/routes'
import TripsRoutes from 'modules/trips/routes'
import UserRoute from 'modules/user/routes'

import RootPage from '../pages/RootPage'

const rootRoute = {
	path: '/',
	component: RootPage,
	routes: [HomeRoute, FavoriteRoute, ...TripsRoutes, ...PlaceRoute, ...SearchRoute, ...UserRoute],
}

export default [rootRoute]
