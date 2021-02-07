import FavoritePlacesPage from 'modules/place/pages/FavoritePage'
import PlacePage from 'modules/place/pages/PlacePage'
import PlacesPage from 'modules/place/pages/PlacesPage'

import { PLACE_ROUTE, PLACES_ROUTE, FAVORITE_PLACES_ROUTE } from './paths'

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
	{
		path: FAVORITE_PLACES_ROUTE,
		exact: true,
		component: FavoritePlacesPage,
	},
]

export default placeRoute
