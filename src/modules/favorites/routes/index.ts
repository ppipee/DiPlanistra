import FavoritesPage from '../pages/FavoritesPage'

import { FAVORITES_PATH } from './paths'

const favoriteRoute = {
	path: FAVORITES_PATH,
	exact: true,
	component: FavoritesPage,
}

export default favoriteRoute
