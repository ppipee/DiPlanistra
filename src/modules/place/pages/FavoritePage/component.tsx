import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'

import FavoriteCardList from 'modules/place/components/FavoriteCardList'
import FavoriteStoreConfig from 'modules/place/stores/FavoriteStore'

import { FavoriteTabs } from './styled'

const FavoritePlacesPageComponent = () => {
	return (
		<div>
			<FavoriteTabs>
				<FavoriteCardList />
			</FavoriteTabs>
		</div>
	)
}

export default withAuth(
	asRoute(FavoritePlacesPageComponent, {
		stores: {
			favoriteStore: FavoriteStoreConfig,
		},
	}),
)
