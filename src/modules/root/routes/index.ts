import HomeRoute from 'modules/home/routes'
import PlaceRoute from 'modules/place/routes'
import SearchRoutes from 'modules/search/routes'
import TripsRoutes from 'modules/trip/routes'
import UserRoute from 'modules/user/routes'

import RootPage from '../pages/RootPage'

import { ROOT_PATH } from './path'

const rootRoute = {
	path: ROOT_PATH,
	component: RootPage,
	routes: [HomeRoute, ...TripsRoutes, ...PlaceRoute, ...UserRoute, ...SearchRoutes],
}

export default [rootRoute]
