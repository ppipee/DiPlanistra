import FavoriteRoute from 'modules/favorites/routes'
import HomeRoute from 'modules/home/routes'
import PlaceRoute from 'modules/place/routes'
import SearchRoute from 'modules/search/routes'
import TripsRoute from 'modules/trips/routes'

import RootPage from '../pages/RootPage'

const rootRoute = {
	path: '/',
	component: RootPage,
	routes: [HomeRoute, FavoriteRoute, TripsRoute, ...PlaceRoute, ...SearchRoute],
}

export default [rootRoute]
