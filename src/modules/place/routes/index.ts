import PlacePage from '../pages/PlacePage'
import PlacesPage from '../pages/PlacesPage'

import { PLACES_ROUTE, PLACE_ROUTE } from './paths'

const placeRoute = [
	{
		path: PLACE_ROUTE,
		exact: true,
		component: PlacePage,
	},
	{
		path: PLACES_ROUTE,
		exact: true,
		component: PlacesPage,
	},
]

export default placeRoute
