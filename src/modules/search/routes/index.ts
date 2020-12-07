import PlacesPage from '../pages/PlacesPage'

import { PLACES_ROUTE } from './paths'

const placeRoute = [
	{
		path: PLACES_ROUTE,
		exact: true,
		component: PlacesPage,
	},
]

export default placeRoute
